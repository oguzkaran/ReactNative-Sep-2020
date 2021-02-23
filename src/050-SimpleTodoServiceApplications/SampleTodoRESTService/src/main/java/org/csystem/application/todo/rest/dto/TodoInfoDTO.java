package org.csystem.application.todo.rest.dto;

import com.fasterxml.jackson.annotation.*;

import java.time.LocalDate;

public class TodoInfoDTO {
    private long m_id;
    private String m_username;
    private String m_title;
    private String m_description = "";
    private LocalDate m_startDate;
    private LocalDate m_expectedEndDate;
    private LocalDate m_endDate;
    private boolean m_isCompleted;

    public TodoInfoDTO()
    {}

    public TodoInfoDTO(long id, String username, String title, String description, LocalDate startDate, LocalDate expectedEndDate, LocalDate endDate, boolean isCompleted)
    {
        m_id = id;
        m_username = username;
        m_title = title;
        m_description = description;
        m_startDate = startDate;
        m_expectedEndDate = expectedEndDate;
        m_endDate = endDate;
        m_isCompleted = isCompleted;
    }

    @JsonGetter("todoId")
    public long getId()
    {
        return m_id;
    }

    public void setId(long id)
    {
        m_id = id;
    }

    public String getUsername()
    {
        return m_username;
    }

    public void setUsername(String username)
    {
        m_username = username;
    }

    @JsonGetter("title")
    public String getTitle()
    {
        return m_title;
    }

    @JsonSetter(value = "title", nulls = Nulls.FAIL)
    public void setTitle(String title)
    {
        m_title = title;
    }

    @JsonGetter("description")
    public String getDescription()
    {
        return m_description;
    }

    @JsonSetter(value = "description", nulls = Nulls.SKIP)
    public void setDescription(String description)
    {
        m_description = description;
    }

    @JsonGetter("start")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    public LocalDate getStartDate()
    {
        return m_startDate;
    }


    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    public void setStartDate(LocalDate startDate)
    {
        m_startDate = startDate;
    }

    @JsonGetter("expected")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    public LocalDate getExpectedEndDate()
    {
        return m_expectedEndDate;
    }

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    public void setExpectedEndDate(LocalDate expectedEndDate)
    {
        m_expectedEndDate = expectedEndDate;
    }

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonGetter("end")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    public LocalDate getEndDate()
    {
        return m_endDate;
    }


    public void setEndDate(LocalDate endDate)
    {
        m_endDate = endDate;
    }

    public boolean isCompleted()
    {
        return m_isCompleted;
    }

    public void setCompleted(boolean completed)
    {
        m_isCompleted = completed;
    }
}
