package Assign41.RestProject.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Assign41.RestProject.model.Feedback;

@Repository
@Qualifier("feedRepo")
public interface FeedbackRepository extends JpaRepository<Feedback ,  Integer>{

}
