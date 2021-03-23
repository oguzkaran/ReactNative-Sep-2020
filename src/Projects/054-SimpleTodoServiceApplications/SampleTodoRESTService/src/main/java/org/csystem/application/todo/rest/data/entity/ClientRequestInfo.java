package org.csystem.application.todo.rest.data.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "clients_request_info")
public class ClientRequestInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "clients_request_info_id")
    private long m_id;

    @Column(name = "host", nullable = false)
    private String m_host;

    @Column(name = "remote_port", nullable = false)
    private int m_remotePort;

    @Column(name = "username", nullable = false)
    private String m_username;

    @Column(name = "query_time", nullable = false)
    private LocalDateTime m_queryTime;

    public ClientRequestInfo()
    {}

    public ClientRequestInfo(String host, int remotePort, String username)
    {
        this(0, host, remotePort, username, LocalDateTime.now());
    }

    public ClientRequestInfo(String host, int remotePort, String username, LocalDateTime queryTime)
    {
        this(0, host, remotePort, username, queryTime);
    }

    public ClientRequestInfo(long id, String host, int remotePort, String username, LocalDateTime queryTime)
    {
        m_id = id;
        m_host = host;
        m_username = username;
        m_remotePort = remotePort;
        m_queryTime = queryTime;
    }

    public long getId()
    {
        return m_id;
    }

    public void setId(long id)
    {
        m_id = id;
    }

    public String getHost()
    {
        return m_host;
    }

    public void setHost(String host)
    {
        m_host = host;
    }

    public int getRemotePort()
    {
        return m_remotePort;
    }

    public void setRemotePort(int remotePort)
    {
        m_remotePort = remotePort;
    }

    public void setUsername(String username)
    {
        m_username = username;
    }

    public LocalDateTime getQueryTime()
    {
        return m_queryTime;
    }

    public void setQueryTime(LocalDateTime queryTime)
    {
        m_queryTime = queryTime;
    }
}
