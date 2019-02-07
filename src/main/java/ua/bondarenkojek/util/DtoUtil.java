package ua.bondarenkojek.util;

import ua.bondarenkojek.dto.UserDto;
import ua.bondarenkojek.model.user.User;

public class DtoUtil {

    public static UserDto parseUserToDto(User user) {
        return UserDto
                .builder()
                .id(user.getId())
                .login(user.getLogin())
                .build();
    }

    public static User parseDtoToUser(UserDto userDto) {
        return User
                .builder()
                .id(userDto.getId())
                .login(userDto.getLogin())
                .build();
    }
}
