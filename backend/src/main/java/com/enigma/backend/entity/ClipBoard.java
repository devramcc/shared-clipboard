package com.enigma.backend.entity;

import com.enigma.backend.constant.ClipBoardType;
import com.enigma.backend.constant.Constant;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = Constant.CLIPBOARD_TABLE)
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class ClipBoard {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    @Enumerated(EnumType.STRING)
    @Column(name = "type")
    private ClipBoardType clipBoardType;

    @Column(name = "clipboard_content", nullable = false)
    private String clipboardContent;

    @PrePersist
    protected void prePersist() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void preUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
