package org.csystem.application.todo.rest.controller;

import org.csystem.application.todo.rest.data.entity.ClientRequestInfo;
import org.csystem.application.todo.rest.dto.TodoInfoDTO;
import org.csystem.application.todo.rest.data.service.ITodoApplicationService;
import org.csystem.util.data.service.DataServiceException;
import org.csystem.util.exception.ExceptionUtil;
import org.springframework.context.annotation.Scope;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

@RestController
@RequestMapping("api/todos")
@Scope("request")
public class TodoInfoController {
    private final ITodoApplicationService m_todoApplicationService;
    private final HttpServletRequest m_httpServletRequest;

    public TodoInfoController(ITodoApplicationService todoApplicationService, HttpServletRequest httpServletRequest)
    {
        m_todoApplicationService = todoApplicationService;
        m_httpServletRequest = httpServletRequest;
    }

    @GetMapping("/count")
    public long countTodos()
    {
        return m_todoApplicationService.countTodos();
    }

    @GetMapping("/all")
    public Iterable<TodoInfoDTO> findAllTodos() // Veri çok fazlaysa bu şekilde almak doğru değildir. Sadece örnek olarak gösterilmiştir.
    {
        var clientRequestInfo = new ClientRequestInfo(m_httpServletRequest.getRemoteHost(),  m_httpServletRequest.getLocalPort(), "");
        m_todoApplicationService.saveClientRequestInfo(clientRequestInfo);

        return m_todoApplicationService.findAllTodos();
    }

    @GetMapping("/todos")
    public Iterable<TodoInfoDTO> findTodos(@RequestParam(value = "count", required = true, defaultValue = "-1") int count)
    {
        if (count <= 0)
            count = 10;

        return m_todoApplicationService.findTodosNative(count);
    }

    @GetMapping("/todosp")
    public Iterable<TodoInfoDTO> findTodosViaPage(@RequestParam(value = "count", required = true, defaultValue = "-1") int count)
    {
        if (count <= 0)
            count = 10;

        return m_todoApplicationService.findTodos(count);
    }

    @GetMapping("/ids")
    public TodoInfoDTO findById(@RequestParam("id") long id)
    {
        return m_todoApplicationService.findById(id).orElse(new TodoInfoDTO());
    }

    @GetMapping("/idsres")
    public ResponseEntity<TodoInfoDTO> findByIdResponseEntity(@RequestParam("id") long id)
    {
        return ResponseEntity.of(m_todoApplicationService.findById(id));
    }

    @GetMapping("/start/month")
    public Iterable<TodoInfoDTO> findByMonth(int month)
    {
        return m_todoApplicationService.findTodosByMonth(month);
    }

    @GetMapping("/start/months")
    public Iterable<TodoInfoDTO> findByMonthsBetween(
            @RequestParam(value = "start", required = false, defaultValue = "-1") int start,
            @RequestParam(value = "end", required = false, defaultValue = "-1") int end)
    {

        if (start <= 0 || start > 12)
            start = 1;

        if (end <= 0 || end > 12)
            end = 12;

        return m_todoApplicationService.findTodosByMonthsBetween(start, end);
    }

    @GetMapping
    public ResponseEntity<Iterable<TodoInfoDTO>> findTodosByCompleted(@RequestParam("completed") boolean completed)
    {
        return ExceptionUtil.subscribe(() -> new ResponseEntity<>(m_todoApplicationService.findTodosByCompleted(completed), HttpStatus.OK),
                ignore -> new ResponseEntity<>(HttpStatus.BAD_REQUEST));
    }

    @GetMapping("/completeds")
    public Iterable<TodoInfoDTO> findCompletedTodos()
    {
        return m_todoApplicationService.findCompletedTodos();
    }

    @GetMapping("/notcompleteds")
    public Iterable<TodoInfoDTO> findNotCompletedTodos()
    {
        return m_todoApplicationService.findNotCompletedTodos();
    }

    @GetMapping("/starts/months")
    public Iterable<TodoInfoDTO> findByMonthsBetweenString(
            @RequestParam(value = "start", required = false, defaultValue = "-1") String startStr,
            @RequestParam(value = "end", required = false, defaultValue = "-1") String endStr)
    {
        try {
            var start = Integer.parseInt(startStr);
            var end = Integer.parseInt(endStr);

            if (start <= 0 || start > 12)
                start = 1;

            if (end <= 0 || end > 12)
                end = 12;

            return m_todoApplicationService.findTodosByMonthsBetween(start, end);
        }
        catch (NumberFormatException|DataServiceException ignore) {
            return new ArrayList<>();
        }
    }

    @GetMapping("/starts/monthsres")
    public ResponseEntity<Iterable<TodoInfoDTO>> findByMonthsBetweenResponseEntity(
            @RequestParam(value = "start", required = false, defaultValue = "-1") String startStr,
            @RequestParam(value = "end", required = false, defaultValue = "-1") String endStr)
    {
        try {
            var start = Integer.parseInt(startStr);
            var end = Integer.parseInt(endStr);

            if (start <= 0 || start > 12)
                start = 1;

            if (end <= 0 || end > 12)
                end = 12;

            return ResponseEntity.ok(m_todoApplicationService.findTodosByMonthsBetween(start, end));
        }
        catch (NumberFormatException|DataServiceException ignore) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/starts")
    public Iterable<TodoInfoDTO> findByMonthString(@RequestParam(value = "mon", required = false, defaultValue = "1") String month)
    {
        try {
            return m_todoApplicationService.findTodosByMonth(Integer.parseInt(month));
        }
        catch (NumberFormatException|DataServiceException ignore) {
            return new ArrayList<>();
        }
    }

    @GetMapping("/startsres")
    public ResponseEntity<Iterable<TodoInfoDTO>> findByMonthStringResponseEntity(@RequestParam(value = "mon", required = false, defaultValue = "1") String month)
    {
        return ExceptionUtil.subscribe(() -> new ResponseEntity<>(m_todoApplicationService.findTodosByMonth(Integer.parseInt(month)), HttpStatus.OK),
                ex -> new ResponseEntity<>(HttpStatus.BAD_REQUEST));
    }

    @PostMapping("/save")
    public TodoInfoDTO saveTodoInfoDTO(@RequestBody TodoInfoDTO todoInfoDTO)
    {
        var clientRequestInfo = new ClientRequestInfo(m_httpServletRequest.getRemoteHost(),  m_httpServletRequest.getRemotePort(), todoInfoDTO.getUsername());
        m_todoApplicationService.saveClientRequestInfo(clientRequestInfo);

        return m_todoApplicationService.saveTodo(todoInfoDTO);
    }
}
