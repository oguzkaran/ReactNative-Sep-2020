package org.csystem.application.todo.rest.data.repository;

import org.csystem.application.todo.rest.data.entity.ClientRequestInfo;
import org.springframework.data.repository.CrudRepository;

public interface IClientRequestInfoRepository extends CrudRepository<ClientRequestInfo, Long> {
    //...
}
