package org.csystem.application.todo.rest.data.dal;

import org.csystem.application.todo.rest.data.entity.ClientRequestInfo;
import org.csystem.application.todo.rest.data.entity.TodoInfo;
import org.csystem.application.todo.rest.data.repository.IClientRequestInfoRepository;
import org.csystem.application.todo.rest.data.repository.ITodoInfoRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;

import java.util.Optional;

import static org.csystem.util.data.DatabaseUtil.doWorkForRepository;

@Component
public class TodoApplicationHelper {
    private final ITodoInfoRepository m_todoInfoRepository;
    private final IClientRequestInfoRepository m_clientRequestInfoRepository;

    private Iterable<TodoInfo> findTodosProc(int count)
    {
        var pageRequest = PageRequest.of(0, count);

        return m_todoInfoRepository.findAll(pageRequest).getContent();
    }

    public TodoApplicationHelper(ITodoInfoRepository todoInfoRepository, IClientRequestInfoRepository clientRequestInfoRepository)
    {
        m_todoInfoRepository = todoInfoRepository;
        m_clientRequestInfoRepository = clientRequestInfoRepository;
    }

    public long countTodos()
    {
        return doWorkForRepository(m_todoInfoRepository::count, "TodoApplicationHelper.countTodos");
    }

    public Iterable<TodoInfo> findAllTodos()
    {
        return doWorkForRepository(m_todoInfoRepository::findAll, "TodoApplicationHelper.findAllTodos");
    }

    public Optional<TodoInfo> findTodoById(long id)
    {
        return doWorkForRepository(() ->  m_todoInfoRepository.findById(id), ex -> System.err.println(ex.getMessage()), "TodoApplicationHelper.findById");
    }

    public Iterable<TodoInfo> findTodosByCompleted(boolean completed)
    {
        return doWorkForRepository(() -> m_todoInfoRepository.findByCompleted(completed), "TodoApplicationHelper.findTodosByCompleted");
    }

    public Iterable<TodoInfo> findCompletedTodos()
    {
        return doWorkForRepository(m_todoInfoRepository::findCompleted, "TodoApplicationHelper.findCompletedTodos");
    }

    public Iterable<TodoInfo> findNotCompletedTodos()
    {
        return doWorkForRepository(m_todoInfoRepository::findNotCompleted, "TodoApplicationHelper.findNotCompletedTodos");
    }

    public Iterable<TodoInfo> findTodosNative(int count)
    {
        return doWorkForRepository(() -> m_todoInfoRepository.findViaNative(count), "TodoApplicationHelper.findTodosNative");
    }

    public Iterable<TodoInfo> findTodos(int count)
    {
        return doWorkForRepository(() -> findTodosProc(count), "TodoApplicationHelper.findTodos");
    }

    public Iterable<TodoInfo> findTodosByMonth(int month)
    {
        return doWorkForRepository(() -> m_todoInfoRepository.findByMonth(month), "TodoApplicationHelper.findTodosByMonth");
    }

    public Iterable<TodoInfo> findTodosByMonthsBetween(int start, int end)
    {
        return doWorkForRepository(() -> m_todoInfoRepository.findByMonthsBetween(start, end), "TodoApplicationHelper.findTodosByMonthsBetween");
    }

    public boolean exitsTodoById(long id)
    {
        return findTodoById(id).isPresent();
    }


    public TodoInfo saveTodoInfo(TodoInfo todoInfo)
    {
        return doWorkForRepository(() -> m_todoInfoRepository.save(todoInfo), "TodoApplicationHelper.saveTodoInfo");
    }


    public ClientRequestInfo saveClientRequestInfo(ClientRequestInfo clientRequestInfo)
    {
        return doWorkForRepository(() -> m_clientRequestInfoRepository.save(clientRequestInfo), "TodoApplicationHelper.saveClientRequestInfo");
    }

    //...
}
