package com.enigma.backend.dto.request;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CreateClipBoardRequest {

    private String type;
    private String clipBoardContent;
}
