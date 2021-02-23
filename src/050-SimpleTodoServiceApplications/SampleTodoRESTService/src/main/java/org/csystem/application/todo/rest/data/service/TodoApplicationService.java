package org.csystem.application.todo.rest.data.service;

import org.csystem.application.todo.rest.data.dal.TodoApplicationHelper;
import org.csystem.application.todo.rest.data.entity.ClientRequestInfo;
import org.csystem.application.todo.rest.data.entity.TodoInfo;
import org.csystem.application.todo.rest.dto.TodoInfoDTO;
import org.csystem.application.todo.rest.mapper.ITodoInfoMapper;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.function.Supplier;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.csystem.util.data.DatabaseUtil.doWorkForService;

@Service
public class TodoApplicationService implements ITodoApplicationService {
    private final TodoApplicationHelper m_todoApplicationHelper;
    private final ITodoInfoMapper m_todoInfoMapper;

    private TodoInfoDTO saveTodoProc(TodoInfoDTO todoInfoDTO)
    {
        var todoInfo = m_todoInfoMapper.todoInfoDTOToTodoInfo(todoInfoDTO);
        //...
        return m_todoInfoMapper.todoInfoToTodoInfoDTO(m_todoApplicationHelper.saveTodoInfo(todoInfo));
    }

    private Iterable<TodoInfoDTO> getTodoInfoDTO(Supplier<Iterable<TodoInfo>> supplier)
    {
        return StreamSupport.stream(supplier.get().spliterator(), false)
                .map(m_todoInfoMapper::todoInfoToTodoInfoDTO)
                .collect(Collectors.toList());
    }

    public TodoApplicationService(TodoApplicationHelper todoApplicationHelper, ITodoInfoMapper todoInfoMapper)
    {
        m_todoApplicationHelper = todoApplicationHelper;
        m_todoInfoMapper = todoInfoMapper;
    }

    @Override
    public long countTodos()
    {
        return doWorkForService(m_todoApplicationHelper::countTodos, "TodoApplicationService.countTodos");
    }

    @Override
    public Iterable<TodoInfoDTO> findAllTodos()
    {
        return doWorkForService(() -> getTodoInfoDTO(m_todoApplicationHelper::findAllTodos), "TodoApplicationService.findAllTodos");
    }

    @Override
    public Iterable<TodoInfoDTO> findTodosByCompleted(boolean completed)
    {
        return doWorkForService(() -> getTodoInfoDTO(() -> m_todoApplicationHelper.findTodosByCompleted(completed)), "TodoApplicationService.findTodosByCompleted");
    }

    @Override
    public Iterable<TodoInfoDTO> findCompletedTodos()
    {
        return doWorkForService(() -> getTodoInfoDTO(m_todoApplicationHelper::findCompletedTodos), "TodoApplicationService.findCompletedTodos");
    }

    @Override
    public Iterable<TodoInfoDTO> findNotCompletedTodos()
    {
        return doWorkForService(() -> getTodoInfoDTO(m_todoApplicationHelper::findNotCompletedTodos), "TodoApplicationService.findNotCompletedTodos");
    }

    @Override
    public Optional<TodoInfoDTO> findById(long id)
    {
        return doWorkForService(() -> m_todoApplicationHelper.findTodoById(id).map(m_todoInfoMapper::todoInfoToTodoInfoDTO),
                "TodoApplicationService.findById");
    }

    @Override
    public Iterable<TodoInfoDTO> findTodosNative(int count)
    {
        return doWorkForService(() -> getTodoInfoDTO(() -> m_todoApplicationHelper.findTodosNative(count)), "TodoApplicationService.findTodosNative");
    }

    @Override
    public Iterable<TodoInfoDTO> findTodos(int count)
    {
        return doWorkForService(() -> getTodoInfoDTO(() -> m_todoApplicationHelper.findTodos(count)), "TodoApplicationService.findTodos");
    }

    @Override
    public Optional<TodoInfoDTO> findTodoById(long id)
    {
        return doWorkForService(() -> m_todoApplicationHelper.findTodoById(id).map(m_todoInfoMapper::todoInfoToTodoInfoDTO), "TodoApplicationService.findTodoById");
    }

    @Override
    public Iterable<TodoInfoDTO> findTodosByMonth(int month)
    {
        return doWorkForService(() -> getTodoInfoDTO(() -> m_todoApplicationHelper.findTodosByMonth(month)), "TodoApplicationService.findTodosByMonth");
    }

    @Override
    public Iterable<TodoInfoDTO> findTodosByMonthsBetween(int start, int end)
    {
        return doWorkForService(() -> getTodoInfoDTO(() -> m_todoApplicationHelper.findTodosByMonthsBetween(start, end)), "TodoApplicationService.findTodosByMonthsBetween");
    }

    @Override
    public TodoInfoDTO saveTodo(TodoInfoDTO todoInfoDTO)
    {
        return doWorkForService(() ->saveTodoProc(todoInfoDTO), "TodoApplicationService.saveTodo");
    }

    @Override
    public ClientRequestInfo saveClientRequestInfo(ClientRequestInfo clientRequestInfo)
    {
        return doWorkForService(() ->m_todoApplicationHelper.saveClientRequestInfo(clientRequestInfo), "TodoApplicationService.saveClientRequestInfo");
    }
    //...
}
