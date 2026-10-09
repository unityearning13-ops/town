// Lightweight Web Audio feedback for presentation transitions
class SoundManager {
  private ctx: AudioContext | null = null;
  public enabled: boolean = false;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  // Played whenever user clicks the sound button at the top
  playToggleChime(isTurningOn: boolean = true): void {
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      if (isTurningOn) {
        // Lush, sparkling crystal chime arpeggio (C5 -> E5 -> G5 -> B5 -> E6 -> G6)
        // Layered with sine + delicate harmonic overtone for a soothing, premium sound
        const notes = [
          { freq: 523.25, time: 0.00, gain: 0.08, dur: 0.45 }, // C5
          { freq: 659.25, time: 0.06, gain: 0.09, dur: 0.50 }, // E5
          { freq: 783.99, time: 0.12, gain: 0.09, dur: 0.55 }, // G5
          { freq: 987.77, time: 0.18, gain: 0.08, dur: 0.60 }, // B5
          { freq: 1318.51, time: 0.24, gain: 0.07, dur: 0.70 }, // E6
          { freq: 1567.98, time: 0.30, gain: 0.06, dur: 0.85 }, // G6 shimmer
        ];

        notes.forEach(({ freq, time, gain, dur }) => {
          const oscMain = ctx.createOscillator();
          const oscShimmer = ctx.createOscillator();
          const noteGain = ctx.createGain();

          oscMain.type = 'sine';
          oscMain.frequency.setValueAtTime(freq, now + time);

          oscShimmer.type = 'triangle';
          oscShimmer.frequency.setValueAtTime(freq * 2, now + time); // Octave overtone

          noteGain.gain.setValueAtTime(0.0001, now + time);
          noteGain.gain.linearRampToValueAtTime(gain, now + time + 0.018);
          noteGain.gain.exponentialRampToValueAtTime(0.0001, now + time + dur);

          const shimmerGain = ctx.createGain();
          shimmerGain.gain.setValueAtTime(gain * 0.15, now + time);

          oscMain.connect(noteGain);
          oscShimmer.connect(shimmerGain);
          shimmerGain.connect(noteGain);
          noteGain.connect(ctx.destination);

          oscMain.start(now + time);
          oscShimmer.start(now + time);
          oscMain.stop(now + time + dur + 0.05);
          oscShimmer.stop(now + time + dur + 0.05);
        });
      } else {
        // Gentle, soft descending tone when muting (soothing G5 -> D5 drop)
        const notes = [
          { freq: 783.99, time: 0.00, gain: 0.05, dur: 0.22 },
          { freq: 587.33, time: 0.08, gain: 0.04, dur: 0.28 },
        ];
        notes.forEach(({ freq, time, gain, dur }) => {
          const osc = ctx.createOscillator();
          const noteGain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + time);
          noteGain.gain.setValueAtTime(0.0001, now + time);
          noteGain.gain.linearRampToValueAtTime(gain, now + time + 0.015);
          noteGain.gain.exponentialRampToValueAtTime(0.0001, now + time + dur);
          osc.connect(noteGain);
          noteGain.connect(ctx.destination);
          osc.start(now + time);
          osc.stop(now + time + dur + 0.05);
        });
      }
    } catch {
      // Audio fallback
    }
  }

  // Celebratory Town Hall Welcome Fanfare with sparkling crystal chords
  playWelcomeCelebration(): void {
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      // Magical uplifting chord sequence
      const chordNotes = [
        { freq: 440.00, time: 0.00, gain: 0.06, dur: 0.7 }, // A4
        { freq: 554.37, time: 0.05, gain: 0.07, dur: 0.75 }, // C#5
        { freq: 659.25, time: 0.10, gain: 0.08, dur: 0.8 }, // E5
        { freq: 880.00, time: 0.16, gain: 0.09, dur: 0.9 }, // A5
        { freq: 1108.73, time: 0.22, gain: 0.08, dur: 1.0 }, // C#6
        { freq: 1318.51, time: 0.28, gain: 0.07, dur: 1.1 }, // E6
        { freq: 1760.00, time: 0.35, gain: 0.06, dur: 1.2 }, // A6 sparkle
      ];

      chordNotes.forEach(({ freq, time, gain, dur }) => {
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + time);
        noteGain.gain.setValueAtTime(0.0001, now + time);
        noteGain.gain.linearRampToValueAtTime(gain, now + time + 0.02);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + time + dur);

        osc.connect(noteGain);
        noteGain.connect(ctx.destination);
        osc.start(now + time);
        osc.stop(now + time + dur + 0.05);
      });
    } catch {
      // ignore
    }
  }

  playSlideTransition(): void {
    if (!this.enabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      // Soft melodic slide woosh-tone (G4 -> C5 chime)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.14); // A5

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.045, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.2);
    } catch {
      // Audio autoplay policy fallback
    }
  }

  playSuccessChime(): void {
    if (!this.enabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.05, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.3);
      });
    } catch {
      // ignore
    }
  }

  playPenToggle(): void {
    if (!this.enabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(640, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.1);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    } catch {
      // ignore
    }
  }

  playClickChime(): void {
    if (!this.enabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(392, now + 0.09);
      gain.gain.setValueAtTime(0.035, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.11);
    } catch {
      // ignore
    }
  }
}

export const soundManager = new SoundManager();
