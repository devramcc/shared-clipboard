package com.enigma.backend.service.impl;

import com.enigma.backend.constant.ClipBoardType;
import com.enigma.backend.entity.ClipBoard;
import com.enigma.backend.repository.ClipBoardRepository;
import com.enigma.backend.service.ClipBoardService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ClipBoardServiceImpl implements ClipBoardService {

    private final ClipBoardRepository clipBoardRepository;

    @Override
    @Transactional
    public ClipBoard create(String type, String clipBoardContent) {
        ClipBoard clipBoard = ClipBoard.builder()
                .clipBoardType(ClipBoardType.findByName(type))
                .clipboardContent(clipBoardContent)
                .build();
        return clipBoardRepository.createClipBoard(clipBoard);
    }

    @Override
    public List<ClipBoard> getAll() {
        return clipBoardRepository.getAllClipBoard();
    }

    @Override
    public List<ClipBoard> getAllToday() {
        return clipBoardRepository.getAllTodayClipBoard();
    }

    @Override
    public List<ClipBoard> getLatest() {
        return Collections.singletonList(clipBoardRepository.getLatest());
    }

    @Override
    @Transactional
    public Boolean delete(String id) {
        return clipBoardRepository.deleteClipBoard(id);
    }
}
