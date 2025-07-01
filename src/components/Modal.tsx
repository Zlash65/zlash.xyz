import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Project } from "../lib/types";
import { getYouTubeId } from "../lib/utils";

interface Props {
  selected: Project | null;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ selected, onClose }) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selected) return;

    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [selected, onClose]);

  useEffect(() => {
    if (selected) closeBtnRef.current?.focus();
  }, [selected]);

  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          ref={backdropRef}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === backdropRef.current && onClose()}
        >
          <motion.div
            className="relative max-w-4xl w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              ref={closeBtnRef}
              className="absolute top-2 right-2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 backdrop-blur"
              onClick={onClose}
            >
              <X size={20} />
            </button>

            {/* Local video */}
            {selected.mediaType === "video" &&
              selected.mediaFormat === "local" && (
                <video
                  src={selected.link}
                  controls
                  autoPlay
                  className="w-full max-h-[80vh] rounded-lg"
                />
              )}

            {/* YouTube embed */}
            {selected.mediaType === "video" &&
              selected.mediaFormat === "youtube" && (
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeId(selected.link)}?autoplay=1`}
                  title={selected.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video max-h-[80vh] rounded-lg"
                />
              )}

            {/* GIF or Image */}
            {(selected.mediaType === "gif" ||
              selected.mediaType === "image") && (
              <img
                src={selected.link}
                alt={selected.title}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
