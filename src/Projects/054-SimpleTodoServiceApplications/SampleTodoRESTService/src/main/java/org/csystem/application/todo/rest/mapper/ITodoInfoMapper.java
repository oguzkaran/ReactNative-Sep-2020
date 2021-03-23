package org.csystem.application.todo.rest.mapper;

import org.csystem.application.todo.rest.data.entity.TodoInfo;
import org.csystem.application.todo.rest.dto.TodoInfoDTO;
import org.mapstruct.Mapper;

@Mapper(implementationName = "TodoInfoMapperImpl", componentModel = "spring")
public interface ITodoInfoMapper {
    TodoInfoDTO todoInfoToTodoInfoDTO(TodoInfo todoInfo);
    TodoInfo todoInfoDTOToTodoInfo(TodoInfoDTO todoInfoDTO);
}
