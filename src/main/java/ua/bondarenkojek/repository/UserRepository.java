package ua.bondarenkojek.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ua.bondarenkojek.model.user.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User getUserByLogin(String login);
}
