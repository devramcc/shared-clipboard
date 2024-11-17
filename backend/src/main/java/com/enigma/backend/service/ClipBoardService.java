package com.enigma.backend.service;

import com.enigma.backend.entity.ClipBoard;

import java.util.List;

public interface ClipBoardService {
    ClipBoard create(String type, String clipBoardContent);
    List<ClipBoard> getAll();
    List<ClipBoard> getAllToday();
    List<ClipBoard> getLatest();
    Boolean delete(String id);
}
