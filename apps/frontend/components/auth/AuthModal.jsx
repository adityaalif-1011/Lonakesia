"use client";

import styles from "./AuthModal.module.css";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { X } from "lucide-react";

import {
  useAuthModal,
} from "@/context/AuthModalContext";

import { useEffect } from "react";

export default function AuthModal() {
  const {
    isOpen,
    closeModal,
    mode,
    setMode,
  } = useAuthModal();

  // LOCK BODY SCROLL

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={closeModal}
        >
          <motion.div
            className={styles.modal}
            initial={{
              opacity: 0,
              y: 18,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 10,
              scale: 0.98,
            }}
            transition={{
              duration: 0.22,
              ease: "easeOut",
            }}
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            {/* CLOSE */}

            <button
              className={styles.closeBtn}
              onClick={closeModal}
            >
              <X size={18} />
            </button>

            {/* TITLE */}

            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{
                  opacity: 0,
                  y: 6,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -6,
                }}
                transition={{
                  duration: 0.16,
                }}
              >
                <h2 className={styles.title}>
                  {mode === "login"
                    ? "Masuk"
                    : "Buat akun"}
                </h2>

                <p className={styles.subtitle}>
                  {mode === "login"
                    ? "Lanjutkan perjalanan bahasa daerahmu."
                    : "Mulai petualangan bahasa daerah Indonesia."}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* FORM */}

            <AnimatePresence mode="wait">
              <motion.form
                key={mode}
                className={styles.form}
                initial={{
                  opacity: 0,
                  x:
                    mode === "login"
                      ? -12
                      : 12,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x:
                    mode === "login"
                      ? 12
                      : -12,
                }}
                transition={{
                  duration: 0.18,
                }}
              >
                {mode === "signup" && (
                  <input
                    type="text"
                    placeholder="Nama pengguna"
                  />
                )}

                <input
                  type="email"
                  placeholder="Email atau nama pengguna"
                />

                <div
                  className={
                    styles.passwordField
                  }
                >
                  <input
                    type="password"
                    placeholder="Kata sandi"
                  />

                  {mode === "login" && (
                    <button
                      type="button"
                      className={
                        styles.forgotBtn
                      }
                    >
                      LUPA?
                    </button>
                  )}
                </div>

                <button
                  type="submit"
                  className={
                    styles.submitBtn
                  }
                >
                  {mode === "login"
                    ? "MASUK"
                    : "BUAT AKUN"}
                </button>
              </motion.form>
            </AnimatePresence>

            {/* DIVIDER */}

            <div className={styles.divider}>
              <span>ATAU</span>
            </div>

            {/* SOCIAL */}

            <div className={styles.socials}>
              <button
                className={styles.socialBtn}
              >
                GOOGLE
              </button>

              <button
                className={styles.socialBtn}
              >
                FACEBOOK
              </button>
            </div>

            {/* SWITCH */}

            <p className={styles.switchText}>
              {mode === "login"
                ? "Belum punya akun?"
                : "Sudah punya akun?"}

              <button
                type="button"
                onClick={() =>
                  setMode(
                    mode === "login"
                      ? "signup"
                      : "login"
                  )
                }
              >
                {mode === "login"
                  ? "Buat akun"
                  : "Masuk"}
              </button>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}