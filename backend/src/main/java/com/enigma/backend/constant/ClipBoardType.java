package com.enigma.backend.constant;

public enum ClipBoardType {
    TEXT("Text"),
    CODE("Code"),
    FILE("File");

    private final String name;

    ClipBoardType(String name) {
        this.name = name;
    }

    public static ClipBoardType findByName(String name) {
        for(ClipBoardType value : values()) {
            if (value.name.equalsIgnoreCase(name)) {
                return value;
            }
        }
        return null;
    }
}
