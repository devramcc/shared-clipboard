package com.enigma.backend.controller;

import com.enigma.backend.constant.Constant;
import com.enigma.backend.dto.request.CreateClipBoardRequest;
import com.enigma.backend.entity.ClipBoard;
import com.enigma.backend.service.ClipBoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(Constant.CLIPBOARD_API)
@RequiredArgsConstructor
public class ClipBoardController {

    private final ClipBoardService clipBoardService;

    @PostMapping
    ClipBoard createClipBoard(@RequestBody CreateClipBoardRequest request) {
        return clipBoardService.create(request.getType(), request.getClipBoardContent());
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping
    List<ClipBoard> getAll() {
        return clipBoardService.getAll();
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/today")
    List<ClipBoard> getAllToday() {
        return clipBoardService.getAllToday();
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/latest")
    List<ClipBoard> getLatest() {
        return clipBoardService.getLatest();
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @DeleteMapping()
    Boolean delete(@RequestParam String id) {
        return clipBoardService.delete(id);
    }
}
