'use client';

import { useEffect } from "react";

export default function PageAnimationInit() {
    useEffect(() => {
        import("../../scripts/page-animations")
            .then((mod) => {
                if (typeof mod.default === "function") {
                    mod.default();
                }
            })
            .catch((err) => {
                console.error("Error al cargar las animaciones:", err);
            });
    }, []);

    return null;
}
