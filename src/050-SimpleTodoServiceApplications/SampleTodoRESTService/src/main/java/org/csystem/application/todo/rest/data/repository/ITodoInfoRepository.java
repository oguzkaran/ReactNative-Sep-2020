package org.csystem.application.todo.rest.data.repository;

import org.csystem.application.todo.rest.data.entity.TodoInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ITodoInfoRepository extends JpaRepository<TodoInfo, Long> {
    @Query(value = "select * from todos where date_part('month', start_date)=?", nativeQuery = true)
    Iterable<TodoInfo> findByMonth(int month);

    @Query(value = "select * from todos where date_part('month', start_date) between ? and ?", nativeQuery = true)
    Iterable<TodoInfo> findByMonthsBetween(int start, int end);

    @Query("from TodoInfo ti where ti.m_completed=true") //HQL, JQL
    Iterable<TodoInfo> findCompleted();

    @Query("from TodoInfo ti where ti.m_completed=false") //HQL, JQL
    Iterable<TodoInfo> findNotCompleted();

    @Query("from TodoInfo ti where ti.m_completed=:completed") //HQL, JQL
    Iterable<TodoInfo> findByCompleted(boolean completed);

    @Query(value="select * from todos order by start_date limit ?", nativeQuery = true)
    Iterable<TodoInfo> findViaNative(int count);
}
