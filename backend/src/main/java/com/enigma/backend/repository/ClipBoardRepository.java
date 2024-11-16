package com.enigma.backend.repository;

import com.enigma.backend.entity.ClipBoard;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ClipBoardRepository {

    @PersistenceContext
    private EntityManager entityManager;

    public ClipBoard createClipBoard(ClipBoard clipBoard) {
        entityManager.persist(clipBoard);
        return clipBoard;
    }

    public List<ClipBoard> getAllClipBoard() {
        return entityManager.createNativeQuery("SELECT * FROM t_clipboard", ClipBoard.class)
                .getResultList();
    }
}
