package Assign41.RestProject.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import Assign41.RestProject.model.Registration;

@Repository
@Qualifier("regRepo")
public interface RegistrationRepository extends JpaRepository<Registration , Integer> {
@Query(value="select * from registration where emailid=:emailid and password=:password",nativeQuery=true)
List<Registration> findAllByEmailidAndPassword (String emailid, String password);
}
