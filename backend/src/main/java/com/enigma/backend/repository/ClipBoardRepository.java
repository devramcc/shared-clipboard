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

    public List<ClipBoard> getAllTodayClipBoard() {
        return entityManager.createNativeQuery("SELECT * FROM t_clipboard WHERE DATE(created_at) = CURRENT_DATE", ClipBoard.class)
                .getResultList();
    }

    public ClipBoard getLatest() {
        return (ClipBoard) entityManager.createNativeQuery("""
                SELECT * FROM t_clipboard\s
                WHERE DATE(created_at) = CURRENT_DATE\s
                ORDER BY created_at DESC\s
                LIMIT 1;
                """, ClipBoard.class).getSingleResult();
    }
}
