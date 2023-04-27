"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // board/fs.ts
  var maxSize = 31.5 * 1024;
  var FileSystem = class {
    constructor() {
      this._content = [];
      this._size = 0;
    }
    create(name) {
      let free_idx = -1;
      for (let idx = 0; idx < this._content.length; ++idx) {
        const entry = this._content[idx];
        if (entry === null) {
          free_idx = idx;
        } else if (entry.name === name) {
          entry.truncate();
          return idx;
        }
      }
      if (free_idx < 0) {
        this._content.push(new FsFile(name));
        return this._content.length - 1;
      } else {
        this._content[free_idx] = new FsFile(name);
        return free_idx;
      }
    }
    find(name) {
      var _a;
      for (let idx = 0; idx < this._content.length; ++idx) {
        if (((_a = this._content[idx]) == null ? void 0 : _a.name) === name) {
          return idx;
        }
      }
      return -1;
    }
    name(idx) {
      const file = this._content[idx];
      return file ? file.name : void 0;
    }
    size(idx) {
      const file = this._content[idx];
      if (!file) {
        throw new Error("File must exist");
      }
      return file.size();
    }
    remove(idx) {
      const file = this._content[idx];
      if (file) {
        this._size -= file.size();
        this._content[idx] = null;
      }
    }
    readbyte(idx, offset) {
      const file = this._content[idx];
      return file ? file.readbyte(offset) : -1;
    }
    write(idx, data, force = false) {
      const file = this._content[idx];
      if (!file) {
        throw new Error("File must exist");
      }
      if (!force && this._size + data.length > maxSize) {
        return false;
      }
      this._size += data.length;
      file.append(data);
      return true;
    }
    clear() {
      for (let idx = 0; idx < this._content.length; ++idx) {
        this.remove(idx);
      }
    }
    toString() {
      return this._content.toString();
    }
  };
  var EMPTY_ARRAY = new Uint8Array(0);
  var FsFile = class {
    constructor(name, buffer = EMPTY_ARRAY) {
      this.name = name;
      this.buffer = buffer;
    }
    readbyte(offset) {
      if (offset < this.buffer.length) {
        return this.buffer[offset];
      }
      return -1;
    }
    append(data) {
      const updated = new Uint8Array(this.buffer.length + data.length);
      updated.set(this.buffer);
      updated.set(data, this.buffer.length);
      this.buffer = updated;
    }
    truncate() {
      this.buffer = EMPTY_ARRAY;
    }
    size() {
      return this.buffer.length;
    }
  };

  // microbit-drawing.svg
  var microbit_drawing_default = '<?xml version="1.0" encoding="UTF-8"?>\n<svg enable-background="new" version="1.1" viewBox="0 0 191.27 155.77" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xlink="http://www.w3.org/1999/xlink">\n <defs>\n  <linearGradient id="n">\n   <stop stop-color="#ffe680" offset="0"/>\n   <stop stop-color="#d4aa00" offset="1"/>\n  </linearGradient>\n  <linearGradient id="i">\n   <stop stop-color="#d4aa00" offset="0"/>\n   <stop stop-color="#d3b12c" offset="1"/>\n  </linearGradient>\n  <linearGradient id="p">\n   <stop stop-color="#ffe680" offset="0"/>\n   <stop stop-color="#fed32a" offset="1"/>\n  </linearGradient>\n  <linearGradient id="l">\n   <stop stop-color="#999" offset="0"/>\n   <stop stop-color="#666" offset="1"/>\n  </linearGradient>\n  <linearGradient id="k">\n   <stop stop-color="#ccc" offset="0"/>\n   <stop stop-color="#999" offset="1"/>\n  </linearGradient>\n  <linearGradient id="g">\n   <stop stop-color="gray" offset="0"/>\n   <stop stop-color="#8c8c8c" offset="1"/>\n  </linearGradient>\n  <linearGradient id="f">\n   <stop stop-color="#fff" offset="0"/>\n   <stop stop-color="#fff" stop-opacity="0" offset="1"/>\n  </linearGradient>\n  <linearGradient id="r">\n   <stop offset="0"/>\n   <stop stop-opacity="0" offset="1"/>\n  </linearGradient>\n  <linearGradient id="s">\n   <stop stop-color="#333" offset="0"/>\n   <stop stop-color="#333" stop-opacity="0" offset="1"/>\n  </linearGradient>\n  <linearGradient id="e">\n   <stop stop-color="#ff0" stop-opacity="0" offset="0"/>\n   <stop stop-color="#fd5" offset=".55226"/>\n   <stop stop-color="#fd5" stop-opacity="0" offset="1"/>\n  </linearGradient>\n  <linearGradient id="j">\n   <stop stop-color="#ccc" offset="0"/>\n   <stop stop-color="#ccc" stop-opacity="0" offset="1"/>\n  </linearGradient>\n  <filter id="aA" x="-.0768" y="-.0768" width="1.1536" height="1.1536" color-interpolation-filters="sRGB">\n   <feGaussianBlur stdDeviation="1.0410454"/>\n  </filter>\n  <filter id="aC" x="-.016803" y="-.016797" width="1.0336" height="1.0336" color-interpolation-filters="sRGB">\n   <feGaussianBlur stdDeviation="0.22398929"/>\n  </filter>\n  <linearGradient id="d">\n   <stop stop-color="#ff0" stop-opacity="0" offset="0"/>\n   <stop stop-color="#fd5" offset=".25231"/>\n   <stop stop-color="#fd5" stop-opacity="0" offset="1"/>\n  </linearGradient>\n  <linearGradient id="L" x1="356.77" x2="361.02" y1="366.15" y2="382.01" gradientUnits="userSpaceOnUse" xlink:href="#e"/>\n  <linearGradient id="aD" x1="267.25" x2="287.51" y1="527.86" y2="509.34" gradientTransform="matrix(.35278 0 0 .35278 -4.0314 40.362)" gradientUnits="userSpaceOnUse" xlink:href="#f"/>\n  <linearGradient id="h">\n   <stop stop-color="#fc0" offset="0"/>\n   <stop stop-color="#c8ab37" stop-opacity="0" offset="1"/>\n  </linearGradient>\n  <radialGradient id="v" cx="132.58" cy="503.1" r="249.35" gradientTransform="matrix(1.7228 -.08453 .01834 .40224 -42.573 216.19)" gradientUnits="userSpaceOnUse" xlink:href="#i"/>\n  <radialGradient id="u" cx="132.58" cy="503.1" r="249.35" gradientTransform="matrix(1.7228 -.08453 .01834 .40224 -42.573 216.19)" gradientUnits="userSpaceOnUse" xlink:href="#h"/>\n  <radialGradient id="x" cx="132.58" cy="503.1" r="249.35" gradientTransform="matrix(.66043 -.03125 .00703 .14871 -257.54 101.54)" gradientUnits="userSpaceOnUse" xlink:href="#h"/>\n  <linearGradient id="ax" x1="259.5" x2="312.2" y1="497.62" y2="537.39" gradientTransform="matrix(.35278 0 0 .35278 -4.0314 40.362)" gradientUnits="userSpaceOnUse" xlink:href="#g"/>\n  <linearGradient id="as" x1="489.08" x2="489.08" y1="252.95" y2="254.4" gradientUnits="userSpaceOnUse" xlink:href="#j"/>\n  <linearGradient id="aB" x1="267.25" x2="287.51" y1="527.86" y2="509.34" gradientTransform="rotate(195 285.96 510.35)" gradientUnits="userSpaceOnUse" xlink:href="#f"/>\n  <linearGradient id="I" x1="38.413" x2="43.169" y1="372.26" y2="382.1" gradientUnits="userSpaceOnUse" xlink:href="#d"/>\n  <linearGradient id="J" x1="137.76" x2="142.98" y1="370.24" y2="377.37" gradientUnits="userSpaceOnUse" xlink:href="#e"/>\n  <linearGradient id="K" x1="251.1" x2="252.15" y1="371.16" y2="377.99" gradientUnits="userSpaceOnUse" xlink:href="#e"/>\n  <linearGradient id="O" x1="439.37" x2="446.7" y1="369.02" y2="383.37" gradientUnits="userSpaceOnUse" xlink:href="#d"/>\n  <linearGradient id="Q" x1="464.57" x2="466.07" y1="368.43" y2="381.72" gradientUnits="userSpaceOnUse" xlink:href="#d"/>\n  <linearGradient id="T" x1="243.79" x2="243.21" y1="340.81" y2="376.29" gradientUnits="userSpaceOnUse" xlink:href="#e"/>\n  <linearGradient id="V" x1="243.79" x2="243.21" y1="340.81" y2="376.29" gradientTransform="matrix(.38335 0 0 .36971 -241.31 21.678)" gradientUnits="userSpaceOnUse" xlink:href="#e"/>\n  <linearGradient id="ab" x1="243.79" x2="243.21" y1="340.81" y2="376.29" gradientTransform="matrix(0 -.38335 .36971 0 21.678 241.31)" gradientUnits="userSpaceOnUse" xlink:href="#e"/>\n  <linearGradient id="aw" x1="98.348" x2="98.348" y1="-231.05" y2="-231.62" gradientUnits="userSpaceOnUse" xlink:href="#k"/>\n  <linearGradient id="ar" x1="221.33" x2="221.32" y1="86.332" y2="85.812" gradientUnits="userSpaceOnUse" xlink:href="#l"/>\n  <filter id="aU" x="-.44829" y="-.26261" width="1.8966" height="1.5252" color-interpolation-filters="sRGB">\n   <feGaussianBlur stdDeviation="0.48324181"/>\n  </filter>\n  <filter id="aT" x="-.18841" y="-.11037" width="1.3768" height="1.2207" color-interpolation-filters="sRGB">\n   <feGaussianBlur stdDeviation="0.20310163"/>\n  </filter>\n  <filter id="aV" x="-1.7738" y="-.257" width="4.5476" height="1.514" color-interpolation-filters="sRGB">\n   <feGaussianBlur stdDeviation="0.95093923"/>\n  </filter>\n  <filter id="aS" x="-1.0926" y="-.64001" width="3.1851" height="2.28" color-interpolation-filters="sRGB">\n   <feGaussianBlur stdDeviation="1.1777319"/>\n  </filter>\n  <linearGradient id="y" x1="171.68" x2="150.93" y1="223.39" y2="223.3" gradientTransform="matrix(0 3.7795 -3.7795 0 941.42 -55.659)" gradientUnits="userSpaceOnUse" xlink:href="#i"/>\n  <linearGradient id="C" x1="171.68" x2="150.93" y1="223.39" y2="223.3" gradientTransform="matrix(0 3.7795 -3.7795 0 941.42 -55.659)" gradientUnits="userSpaceOnUse" xlink:href="#i"/>\n  <linearGradient id="ag" x1="243.79" x2="243.21" y1="340.81" y2="376.29" gradientTransform="matrix(0 -.38335 .36971 0 21.678 279.13)" gradientUnits="userSpaceOnUse" xlink:href="#e"/>\n  <linearGradient id="z" x1="-215.45" x2="-211.76" y1="128.36" y2="132.43" gradientTransform="matrix(0 3.7795 -3.7795 0 849.5 -60.99)" gradientUnits="userSpaceOnUse" xlink:href="#n"/>\n  <linearGradient id="D" x1="-215.45" x2="-211.76" y1="128.36" y2="132.43" gradientTransform="matrix(0 3.7795 -3.7795 0 849.5 -60.99)" gradientUnits="userSpaceOnUse" xlink:href="#n"/>\n  <linearGradient id="az" x1="243.46" x2="314.99" y1="521.91" y2="490.82" gradientTransform="matrix(.35278 0 0 .35278 -4.0314 40.362)" gradientUnits="userSpaceOnUse" xlink:href="#f"/>\n  <linearGradient id="ad" x1="-213.88" x2="-213.88" y1="171.72" y2="153.49" gradientUnits="userSpaceOnUse" xlink:href="#i"/>\n  <linearGradient id="ae" x1="-215.45" x2="-211.76" y1="128.36" y2="132.43" gradientTransform="translate(-1.4105 24.322)" gradientUnits="userSpaceOnUse" xlink:href="#n"/>\n  <filter id="aR" x="-1.3184" y="-.77231" width="3.6368" height="2.5446" color-interpolation-filters="sRGB">\n   <feGaussianBlur stdDeviation="1.4211866"/>\n  </filter>\n  <filter id="t" x="-.059442" y="-.040252" width="1.1189" height="1.0805" color-interpolation-filters="sRGB">\n   <feGaussianBlur stdDeviation="0.68192124"/>\n  </filter>\n  <linearGradient id="aF" x1="259.5" x2="312.2" y1="497.62" y2="537.39" gradientTransform="matrix(.85377 0 0 .29902 18.152 502.57)" gradientUnits="userSpaceOnUse" xlink:href="#g"/>\n  <linearGradient id="aG" x1="243.46" x2="314.99" y1="521.91" y2="490.82" gradientTransform="matrix(.51497 0 0 .34392 114.9 479.66)" gradientUnits="userSpaceOnUse" xlink:href="#f"/>\n  <linearGradient id="aH" x1="314.45" x2="264.11" y1="517.77" y2="517.77" gradientTransform="matrix(.18139 0 0 .29902 190.4 502.57)" gradientUnits="userSpaceOnUse" xlink:href="#g"/>\n  <linearGradient id="aI" x1="314.45" x2="264.11" y1="517.77" y2="517.77" gradientTransform="matrix(.20066 0 0 .29902 184.32 502.57)" gradientUnits="userSpaceOnUse" xlink:href="#g"/>\n  <linearGradient id="aJ" x1="314.45" x2="264.11" y1="517.77" y2="517.77" gradientTransform="matrix(.20227 0 0 .29902 -341.45 -807.78)" gradientUnits="userSpaceOnUse" xlink:href="#g"/>\n  <radialGradient id="aK" cx="-290.16" cy="-654.83" r="4.6559" gradientTransform="matrix(-1.042 -1.0084 .95442 -1.0005 40.179 -1601.7)" gradientUnits="userSpaceOnUse">\n   <stop stop-color="#ccc" offset="0"/>\n   <stop stop-color="#8c8c8c" offset="1"/>\n  </radialGradient>\n  <radialGradient id="aL" cx="241.01" cy="-655.03" r="4.0618" gradientTransform="matrix(-2.7323 0 0 -2.3126 901.49 -2170.4)" gradientUnits="userSpaceOnUse">\n   <stop stop-color="#fff" offset="0"/>\n   <stop stop-color="#adadad" stop-opacity=".6" offset=".6926"/>\n   <stop stop-color="#333" stop-opacity="0" offset="1"/>\n  </radialGradient>\n  <linearGradient id="aM" x1="242.74" x2="271.26" y1="670.54" y2="643.58" gradientTransform="matrix(.98522 0 0 .98345 -521.46 10.717)" gradientUnits="userSpaceOnUse" xlink:href="#r"/>\n  <linearGradient id="aN" x1="-241.79" x2="-247.3" y1="-655.11" y2="-655.11" gradientTransform="matrix(.9761 0 0 1 482.33 1310.3)" gradientUnits="userSpaceOnUse" xlink:href="#s"/>\n  <linearGradient id="aO" x1="-241.79" x2="-247.3" y1="-655.11" y2="-655.11" gradientTransform="matrix(.9761 0 0 1 -43.089 2e-6)" gradientUnits="userSpaceOnUse" xlink:href="#s"/>\n  <radialGradient id="aP" cx="-265.55" cy="655.3" r="18.049" gradientTransform="matrix(-.6997 .31804 -.27726 -.60999 -259.33 1138.7)" gradientUnits="userSpaceOnUse">\n   <stop stop-color="#ffd5d5" offset="0"/>\n   <stop stop-color="#ccc" stop-opacity="0" offset="1"/>\n  </radialGradient>\n  <filter id="aE" x="-.012" y="-.012" width="1.024" height="1.024" color-interpolation-filters="sRGB">\n   <feGaussianBlur stdDeviation="0.057384014"/>\n  </filter>\n  <linearGradient id="G" x1="171.68" x2="150.93" y1="223.39" y2="223.3" gradientTransform="matrix(0 3.7795 -3.7795 0 798.23 -55.659)" gradientUnits="userSpaceOnUse" xlink:href="#i"/>\n  <linearGradient id="H" x1="-215.45" x2="-211.76" y1="128.36" y2="132.43" gradientTransform="matrix(0 3.7795 -3.7795 0 706.31 -60.99)" gradientUnits="userSpaceOnUse" xlink:href="#n"/>\n  <linearGradient id="ak" x1="28.845" x2="35.218" y1="11.756" y2="18.524" gradientUnits="userSpaceOnUse" xlink:href="#p"/>\n  <linearGradient id="am" x1="10.582" x2="16.018" y1="11.235" y2="20.294" gradientUnits="userSpaceOnUse" xlink:href="#p"/>\n  <linearGradient id="an" x1="24.665" x2="21.488" y1="42.459" y2="5.836" gradientUnits="userSpaceOnUse" xlink:href="#n"/>\n  <linearGradient id="ao" x1="5.1802" x2="41.232" y1="13.734" y2="23.521" gradientUnits="userSpaceOnUse" xlink:href="#i"/>\n  <linearGradient id="aj" x1="24.665" x2="23.05" y1="42.459" y2="2.4" gradientUnits="userSpaceOnUse" xlink:href="#n"/>\n  <linearGradient id="ap" x1="24.665" x2="23.05" y1="42.459" y2="2.4" gradientTransform="matrix(.578 0 0 .578 105.52 31.813)" gradientUnits="userSpaceOnUse" xlink:href="#n"/>\n  <linearGradient id="aq" x1="28.845" x2="35.218" y1="11.756" y2="18.524" gradientTransform="matrix(.578 0 0 .578 105.52 31.813)" gradientUnits="userSpaceOnUse" xlink:href="#p"/>\n  <filter id="aW" x="-.20499" y="-.14488" width="1.41" height="1.2898" color-interpolation-filters="sRGB">\n   <feGaussianBlur stdDeviation="1.7934722"/>\n  </filter>\n  <filter id="aX" x="-.20427" y="-.1343" width="1.4085" height="1.2686" color-interpolation-filters="sRGB">\n   <feGaussianBlur stdDeviation="0.37199018"/>\n  </filter>\n </defs>\n <g id="USBConnector" transform="translate(-7.641 -1.4302)">\n  <path transform="matrix(.12066 0 0 .12066 -571.78 -13.486)" d="m5457.1 169.08v-27.775l-5.6629-4.5842 6.7415-6.4718 6.7415 5.3932 0.2697 5.9325h11.595v-11.865l5.1236-5.1235h225.44l4.1797 4.1797v12.27h11.73v-4.0449l12.404-9.9774 5.9325 5.3932-9.5729 9.5729v26.831z" fill="#999999"/>\n  <path transform="matrix(.12066 0 0 .12066 -571.78 -13.486)" d="m5493.4 169.05v-27.505h-6.7415v27.505z" fill="#d5d3ce"/>\n  <path transform="matrix(.12066 0 0 .12066 -571.78 -13.486)" d="m5504.2 124.6v10.363h5.3932v-10.402z" fill="#c2bfb8"/>\n  <path transform="matrix(.12066 0 0 .12066 -571.78 -13.486)" d="m5599.1 124.55v10.3h5.3932v-10.339z" fill="#c2bfb8"/>\n  <path transform="matrix(.12066 0 0 .12066 -571.78 -13.486)" d="m5704.8 168.85-0.022-27.748h-6.7415l0.022 27.748z" fill="#d5d3ce"/>\n  <path transform="matrix(.12066 0 0 .12066 -571.78 -13.486)" d="m5704.8 168.85-0.022-27.748 18.509-0.0613 6.1246 4.1797v23.595z" fill="#bdbdb7"/>\n  <path transform="matrix(.12066 0 0 .12066 -571.78 -13.486)" d="m5502.5 138.4 7.0786-3.4382h75.976l5.9381 3.4284v2.976h-89.128z" fill="#333331"/>\n  <path transform="matrix(.12066 0 0 .12066 -571.78 -13.486)" d="m5597.6 138.32 7.0786-3.4382h75.976l5.9381 3.4284v2.976h-89.128z" fill="#333331"/>\n  <path transform="matrix(.12066 0 0 .12066 -571.78 -13.486)" d="m5579.6 151.58v14.13l2.4501 2.5778h62.344l2.5862-2.721v-14.082z" fill="none" stroke="#a1a19d" stroke-width=".97632px"/>\n  <path transform="matrix(.12066 0 0 .12066 -571.78 -13.486)" d="m5493.4 168.85v-27.505l204.65-0.24307 0.022 27.748z" fill="#8a8b87"/>\n  <path transform="matrix(.12066 0 0 .12066 -571.78 -13.486)" d="m5723.3 141.04v-4.0449l12.404-9.9774 5.9325 5.3932-9.5729 9.5729v26.831h-2.6393v-23.595z" fill="#8b8b88"/>\n  <path transform="matrix(.12066 0 0 .12066 -571.78 -13.486)" d="m5465.2 141.58-0.2697-5.9325-6.7415-5.3932-6.7415 6.4718 5.6629 4.5842v27.775h2.6534v-25.331z" fill="#8b8b88"/>\n  <path transform="matrix(.12066 0 0 .12066 -571.78 -13.486)" d="m5476.8 129.71 5.1236-5.1235 22.314 8e-3 0.01 5.1107z" fill="#a9a8a3"/>\n  <path transform="matrix(.12066 0 0 .12066 -571.78 -13.486)" d="m5509.6 124.56v10.402h75.976v-10.425z" fill="#b0b0ab"/>\n  <path transform="matrix(.12066 0 0 .12066 -571.78 -13.486)" d="m5459.8 169.08v-25.331l5.4364-2.1741 21.438-0.0318v27.505z" fill="#c1c1bb"/>\n  <path transform="matrix(.12066 0 0 .12066 -571.78 -13.486)" d="m5604.5 124.51v10.339l76.164 0.0253v-10.334z" fill="#b0b0ab"/>\n  <path transform="matrix(.12066 0 0 .12066 -571.78 -13.486)" d="m5585.6 134.96v-10.425l13.517 0.0203v10.3l5.5807 0.0253-7.0786 3.4382-0.1348 2.9663-5.9459 0.0794v-2.976z" fill="#a3a39f"/>\n  <path transform="matrix(.12066 0 0 .12066 -571.78 -13.486)" d="m5476.8 141.58v-11.865l27.448-5e-3 -0.01 5.2521 5.3932 2.7e-4 -7.0786 3.4382-0.1348 2.9663z" fill="#bebdb8"/>\n  <path transform="matrix(.12066 0 0 .12066 -571.78 -13.486)" d="m5686.6 138.31v-13.729l-5.9381-0.0335v10.334z" fill="#979794"/>\n  <path transform="matrix(.12066 0 0 .12066 -571.78 -13.486)" d="m5686.6 141.28v-2.976h24.877l0.042 2.7295z" fill="#bcbab5"/>\n  <path transform="matrix(.12066 0 0 .12066 -571.78 -13.486)" d="m5686.6 138.31v-13.729l20.739 0.01 4.1797 4.1797-0.042 9.54z" fill="#abaaa6"/>\n  <path transform="matrix(.12066 0 0 .12066 -571.78 -13.486)" d="m5637.2 154.49h3.9775v14.231h-61.96v-14.142h3.8891v10.341h54.094z" fill="#949490"/>\n  <path transform="matrix(.12066 0 0 .12066 -571.78 -13.486)" d="m5579.3 154.58 4.1543-3.182h53.917l3.8891 3.0936z" fill="#646461"/>\n  <path transform="matrix(.12066 0 0 .12066 -571.78 -13.486)" d="m5583.1 154.58 54.094-0.0884v10.43h-54.094z" fill="#8b8b88"/>\n  <path transform="matrix(.12083 0 0 .11763 -572.74 -12.985)" d="m5621.5 164.84c0.01-1.6042 0.2928-3.3004 0-4.8051-1.611-2.7499-3.547-3.6327-5.6569-3.5159-7.6461-0.7846-9.0406 6.0462-16.263 6.0942-4.6775-0.13012-5.2207-1.8844-5.4801-3.7503l0.052-4.4535v-30.229" fill="none" filter="url(#t)" stroke="#61615e" stroke-width=".81423px"/>\n </g>\n <g id="Board" transform="rotate(90 128.8 112.64)">\n  <path transform="matrix(0 -.26458 .26458 0 14.726 249.08)" d="m76.244 26.025c-25.5 0-46.219 19.983-46.219 44.576v478.17c0 20.227 14.02 37.324 33.184 42.762 0.19604-0.30031 0.37103-0.61268 0.5-0.95117 1.8269-5.1986 6.7534-8.9121 12.592-8.9121h23.568c5.8376 0 10.882 3.7147 12.709 8.9121 0.45707 1.1996 1.3488 2.1815 2.4785 2.7656h89.354c1.1453-0.58415 2.0567-1.5663 2.5137-2.7656 1.8269-5.1986 6.7534-8.9121 12.592-8.9121h23.566c5.8376 0 10.884 3.7147 12.711 8.9121 0.45655 1.1983 1.3448 2.1812 2.4726 2.7656h104.48c1.4108-0.52251 2.5537-1.6162 3.084-3.0078 1.8269-5.1986 6.7534-8.9121 12.592-8.9121h23.566c5.8376 0 10.884 3.7147 12.711 8.9121 0.53024 1.3917 1.6462 2.4854 3.041 3.0078h106.22c1.1453-0.58416 2.0548-1.5663 2.5117-2.7656 1.8269-5.1986 6.7534-8.9121 12.592-8.9121h23.566c5.8375 0 10.884 3.7147 12.711 8.9121 0.45655 1.1983 1.3447 2.1812 2.4727 2.7656h88.83c1.1454-0.58415 2.0567-1.5663 2.5137-2.7656 1.8269-5.1986 6.7534-8.9121 12.592-8.9121h23.566c5.8376 0 10.884 3.7147 12.711 8.9121 0.1239 0.3252 0.28921 0.62781 0.47265 0.91797 19.101-5.4751 33.061-22.544 33.061-42.729v-478.17c0-24.593-20.574-44.576-46.074-44.576zm-25.355 275.42c3.9119 0 6.9551 3.0739 6.9551 6.707 0 3.7728-3.0432 6.709-6.9551 6.709-3.912 0-6.9531-3.0759-6.9531-6.709 0-3.7728 3.1861-6.707 6.9531-6.707zm683.58 0c3.912 0 6.9551 3.0739 6.9551 6.707 0.1447 3.7728-3.0431 6.709-6.9551 6.709-3.9119 0-6.9551-3.0759-6.9551-6.709 0-3.7728 3.188-6.707 6.9551-6.707zm-645.91 172.08c5.4944 0.0837 10.949 1.795 15.496 4.8906 15.491 9.7527 16.412 34.5 1.6973 45.385-13.895 11.905-37.818 5.4836-43.855-11.797-7.3001-16.812 5.9846-37.816 24.309-38.414 0.78409-0.0553 1.5686-0.0764 2.3535-0.0645zm143.58 0.92579c5.4949 0.09 10.934 1.7894 15.486 4.8887 15.483 9.7521 16.422 34.507 1.6973 45.383-13.894 11.925-37.82 5.4808-43.863-11.795-7.2787-16.821 5.9969-37.805 24.322-38.416 0.78486-0.0534 1.5724-0.0734 2.3574-0.0605zm159.29 0c5.4949 0.09 10.934 1.7894 15.486 4.8887 15.485 9.7536 16.42 34.503 1.6973 45.383-13.894 11.924-37.82 5.4821-43.861-11.795-7.2866-16.823 5.9966-37.806 24.322-38.416 0.78486-0.0534 1.5705-0.0734 2.3555-0.0605zm160.36 0c5.4949 0.09 10.934 1.7894 15.486 4.8887 15.485 9.7536 16.42 34.503 1.6973 45.383-13.894 11.925-37.82 5.4808-43.863-11.795-7.2822-16.823 5.998-37.803 24.324-38.416 0.78481-0.0534 1.5705-0.0734 2.3555-0.0605zm141.42 1.0742c5.4945 0.0837 10.947 1.7969 15.494 4.8926 15.489 9.7525 16.412 34.498 1.6973 45.383-13.895 11.905-37.818 5.4856-43.855-11.795-7.3016-16.811 5.9846-37.818 24.309-38.416 0.78409-0.0553 1.5706-0.0764 2.3555-0.0645z" fill="#1a1a1a"/>\n  <g fill="none" stroke="#000000" stroke-width=".3">\n   <circle transform="rotate(-90)" cx="-225.62" cy="147.67" r="7.1815"/>\n   <circle transform="rotate(-90)" cx="-187.64" cy="147.92" r="7.1815"/>\n   <circle transform="rotate(-90)" cx="-145.49" cy="147.92" r="7.1815"/>\n   <circle transform="rotate(-90)" cx="-103.07" cy="147.92" r="7.1815"/>\n   <circle transform="rotate(-90)" cx="-65.646" cy="148.2" r="7.1815"/>\n  </g>\n  <g fill="#c8ab37">\n   <path d="m153.86 241.22h7.0985c3.9929 0 7.4682-2.3768 9.3168-5.5202h-16.415z"/>\n   <path d="m170.24 55.83c-1.8486-3.1434-5.3239-5.5202-9.2798-5.5202h-7.0985v5.5202z"/>\n   <path transform="rotate(-90)" d="m-215.65 153.49h3.5268v18.227h-3.5268z"/>\n   <path transform="matrix(0 -.26458 .26458 0 14.726 249.08)" d="m231.28 469.4c-18.546 0-32.022 14.391-33.471 32.277v91.666h6.6055c1.1453-0.58415 2.0567-1.5663 2.5137-2.7656 1.8269-5.1986 6.7534-8.9121 12.592-8.9121h23.566c5.8376 0 10.884 3.7147 12.711 8.9121 0.45655 1.1983 1.3447 2.1812 2.4726 2.7656h6.4785v-91.666c0-17.746-14.923-32.277-33.469-32.277zm0.28906 5.8672c15.503 0 27.963 12.157 27.963 26.969 0 14.952-12.46 26.969-27.963 26.969-15.503 0-27.963-12.017-27.963-26.969 0-14.952 12.46-26.969 27.963-26.969z"/>\n   <path transform="matrix(0 -.26458 .26458 0 14.726 249.08)" d="m390.51 469.4c-18.546 0-32.02 14.391-33.469 32.277v91.666h6.3672c1.1453-0.58415 2.0567-1.5663 2.5137-2.7656 1.8269-5.1986 6.7534-8.9121 12.592-8.9121h23.566c5.8376 0 10.884 3.7147 12.711 8.9121 0.45655 1.1983 1.3447 2.1812 2.4727 2.7656h6.7148v-91.666c0-17.746-14.923-32.277-33.469-32.277zm0.57812 5.8672c15.503 0 27.965 12.157 27.965 26.969 0 14.952-12.462 26.969-27.965 26.969-15.503 0-27.963-12.017-27.963-26.969 0-14.952 12.46-26.969 27.963-26.969z"/>\n   <path transform="matrix(0 -.26458 .26458 0 14.726 249.08)" d="m551.19 469.4c-18.546 0-32.02 14.391-33.469 32.277v91.666h6.2441c1.1453-0.58415 2.0567-1.5663 2.5137-2.7656 1.8269-5.1986 6.7534-8.9121 12.592-8.9121h23.566c5.8376 0 10.884 3.7147 12.711 8.9121 0.45655 1.1983 1.3447 2.1812 2.4727 2.7656h6.8379v-91.666c0-17.746-14.923-32.277-33.469-32.277zm0.14453 5.8672c15.503 0 27.963 12.157 27.963 26.969 0 14.952-12.46 26.969-27.963 26.969-15.503 0-27.963-12.017-27.963-26.969 0-14.952 12.46-26.969 27.963-26.969z"/>\n   <path transform="matrix(0 -.26458 .26458 0 14.726 249.08)" d="m693.32 469.82c-18.835 0-34.193 14.813-34.193 32.979v90.547h7.5215c1.1454-0.58415 2.0567-1.5663 2.5137-2.7656 1.8269-5.1986 6.7534-8.9121 12.592-8.9121h23.566c5.8376 0 10.884 3.7147 12.711 8.9121 0.2318 0.60842 0.58491 1.1527 1.0137 1.627 2.8212-0.63993 5.6287-1.5241 8.4688-2.6328v-86.637c0-18.445-15.358-33.117-34.193-33.117zm-0.28906 6.5684c15.503 0 27.963 12.157 27.963 26.969 0 14.812-12.605 26.969-27.963 26.969-15.503 0-27.963-12.017-27.963-26.969 0-14.952 12.46-26.969 27.963-26.969z"/>\n  </g>\n  <g transform="matrix(0 -.38335 .36971 0 21.612 241.22)" fill="url(#v)" stroke="#d4aa00" stroke-width=".7028" style="fill:url(#u)">\n   <path d="m0 357.7v19.2c0 10.8 6.2 20.2 14.4 25.2v-44.4z" style="fill:url(#v)"/>\n   <path d="m483.6 402c8.2-5 14.4-14.4 14.4-25.1v-19.2h-14.4z" style="fill:url(#v)"/>\n  </g>\n  <path transform="rotate(-90)" d="m-215.65 153.49h3.5268v18.227h-3.5268z" fill="url(#x)" stroke="#d4aa00" stroke-width=".26458" style="fill:url(#x)"/>\n  <g stroke-width="1.1339">\n   <path transform="matrix(0 -.26458 .26458 0 14.726 249.08)" d="m231.28 469.4c-18.546 0-32.022 14.391-33.471 32.277v91.666h6.6055c1.1453-0.58415 2.0567-1.5663 2.5137-2.7656 1.8269-5.1986 6.7534-8.9121 12.592-8.9121h23.566c5.8376 0 10.884 3.7147 12.711 8.9121 0.45706 1.1996 1.3468 2.1815 2.4766 2.7656h6.4746v-91.666c0-17.746-14.923-32.277-33.469-32.277zm0.28906 5.8672c15.503 0 27.963 12.157 27.963 26.969 0 14.952-12.46 26.969-27.963 26.969-15.503 0-27.963-12.017-27.963-26.969 0-14.952 12.46-26.969 27.963-26.969z" fill="url(#y)" stroke="url(#z)" style="fill:url(#y);stroke:url(#z)"/>\n   <path transform="matrix(0 -.26458 .26458 0 14.726 249.08)" d="m390.51 469.4c-18.546 0-32.02 14.391-33.469 32.277v91.666h6.3672c1.1453-0.58416 2.0567-1.5663 2.5137-2.7656 1.8269-5.1986 6.7534-8.9121 12.592-8.9121h23.566c5.8376 0 10.884 3.7147 12.711 8.9121 0.45706 1.1996 1.3468 2.1815 2.4766 2.7656h6.7109v-91.666c0-17.746-14.923-32.277-33.469-32.277zm0.57812 5.8672c15.503 0 27.965 12.157 27.965 26.969 0 14.952-12.462 26.969-27.965 26.969-15.503 0-27.963-12.017-27.963-26.969 0-14.952 12.46-26.969 27.963-26.969z" fill="url(#y)" stroke="url(#z)" style="fill:url(#y);stroke:url(#z)"/>\n   <path transform="matrix(0 -.26458 .26458 0 14.726 249.08)" d="m551.19 469.4c-18.546 0-32.02 14.391-33.469 32.277v91.666h6.2441c0.0131-7e-3 0.0241-0.0167 0.0371-0.0234 0.2513-0.1307 0.48901-0.28198 0.71484-0.44922 0.0548-0.0407 0.10704-0.0842 0.16016-0.12695 0.17763-0.14246 0.3446-0.29735 0.50195-0.46094 0.0597-0.0622 0.11929-0.12439 0.17578-0.18945 0.14072-0.16163 0.26904-0.33374 0.38867-0.51172 0.0482-0.0719 0.1-0.14046 0.14453-0.21485 0.15081-0.25121 0.28527-0.51255 0.39063-0.78906 1.8269-5.1986 6.7534-8.9121 12.592-8.9121h23.566c5.1079 0 9.6091 2.8442 11.879 7.0371 0.32427 0.59899 0.6036 1.2253 0.83203 1.875 0.10746 0.28206 0.24352 0.54905 0.39648 0.80469 0.0342 0.0573 0.075 0.11013 0.11133 0.16601 0.12557 0.19245 0.26081 0.37721 0.41016 0.55079 0.0538 0.0628 0.10938 0.12343 0.16601 0.18359 0.15894 0.16786 0.32987 0.3251 0.50977 0.4707 0.0453 0.0368 0.0882 0.076 0.13477 0.11133 0.23639 0.17859 0.48484 0.34141 0.75 0.47852h6.832v-91.666c0-17.746-14.923-32.277-33.469-32.277zm0.14453 5.8672c15.503 0 27.963 12.157 27.963 26.969 0 14.952-12.46 26.969-27.963 26.969-15.503 0-27.963-12.017-27.963-26.969 0-14.952 12.46-26.969 27.963-26.969z" fill="url(#C)" stroke="url(#D)" style="fill:url(#C);stroke:url(#D)"/>\n   <path transform="matrix(0 -.26458 .26458 0 14.726 249.08)" d="m693.32 469.82c-18.835 0-34.193 14.813-34.193 32.979v90.547h7.5215c1.1454-0.58415 2.0567-1.5663 2.5137-2.7656 1.8269-5.1986 6.7534-8.9121 12.592-8.9121h23.566c5.8376 0 10.884 3.7147 12.711 8.9121 0.23197 0.60885 0.58448 1.1525 1.0137 1.627 2.8212-0.63993 5.6287-1.5241 8.4688-2.6328v-86.637c0-18.445-15.358-33.117-34.193-33.117zm-0.28906 6.5684c15.503 0 27.963 12.157 27.963 26.969 0 14.812-12.605 26.969-27.963 26.969-15.503 0-27.963-12.017-27.963-26.969 0-14.952 12.46-26.969 27.963-26.969z" fill="url(#y)" stroke="url(#z)" style="fill:url(#y);stroke:url(#z)"/>\n   <path transform="matrix(0 -.26458 .26458 0 14.726 249.08)" d="m88.084 469.4c-18.546 0-32.02 14.393-33.469 32.279v86.475c2.7153 1.3917 5.5984 2.5141 8.5996 3.3672 0.19331-0.29758 0.36653-0.6065 0.49414-0.94141 1.8269-5.1986 6.7534-8.9121 12.592-8.9121h23.568c5.8376 0 10.882 3.7147 12.709 8.9121 0.45707 1.1996 1.3488 2.1815 2.4785 2.7656h6.4961v-91.666c0-17.746-14.923-32.279-33.469-32.279zm0.4707 4.1191c5.4944 0.0837 10.949 1.795 15.496 4.8906 6.9922 4.4021 11.005 11.861 11.963 19.719 0.21352 1.341 0.32422 2.7133 0.32422 4.1094 0 3.4198-0.65859 6.6834-1.8496 9.6875-1.6867 4.627-4.5907 8.7996-8.7402 11.869-13.895 11.906-37.818 5.4836-43.855-11.797-7.3001-16.812 5.9846-37.816 24.309-38.414 0.78409-0.0553 1.5686-0.0764 2.3535-0.0645z" fill="url(#G)" stroke="url(#H)" style="fill:url(#G);stroke:url(#H)"/>\n  </g>\n  <path transform="matrix(0 -.38335 .36971 0 21.612 241.22)" d="m35.9 376.4c0-2.8 2.1-5.1 5.5-5.1 3.3 0 5.5 2.4 5.5 5.1v4.7c0 2.8-2.2 5.1-5.5 5.1s-5.5-2.4-5.5-5.1zm7.6 0c0-1.3-0.8-2.3-2.2-2.3-1.3 0-2.1 1.1-2.1 2.3v4.7c0 1.2 0.8 2.3 2.1 2.3s2.2-1.1 2.2-2.3z"/>\n  <path transform="matrix(0 -.38335 .36971 0 21.612 241.22)" d="m136.5 374.1c2.8 0 3.4-0.8 3.4-2.5h2.9v14.3h-3.4v-9.5h-3v-2.3z"/>\n  <path transform="matrix(0 -.38335 .36971 0 21.612 241.22)" d="m248.9 378.5c1.7-1 3-1.7 3-3.1 0-1.1-0.7-1.6-1.6-1.6-1 0-1.8 0.6-1.8 2.1h-3.3c0-2.6 1.8-4.6 5.1-4.6 2.6 0 4.9 1.3 4.9 4.3 0 2.4-2.3 3.9-3.8 4.7-2 1.3-2.5 1.8-2.5 2.9h6.1v2.7h-10c0.1-4.7 1.7-6 3.9-7.4z"/>\n  <g stroke-width=".7028">\n   <path transform="matrix(0 -.38335 .36971 0 21.612 241.22)" d="m352.1 381.1c0 1.6 0.9 2.5 2.2 2.5 1.2 0 1.9-0.9 1.9-1.9 0-1.2-0.6-2-2.1-2h-1.3v-2.6h1.3c1.5 0 1.9-0.7 1.9-1.8s-0.7-1.6-1.6-1.6c-1.4 0-1.8 0.8-1.8 2.1h-3.3c0-2.4 1.5-4.6 5.1-4.6 2.6 0 5 1.3 5 4 0 1.6-1 2.8-2.1 3.2 1.3 0.5 2.3 1.6 2.3 3.5 0 2.7-2.4 4.3-5.2 4.3-3.5 0-5.5-2.1-5.5-5.1z"/>\n   <path transform="matrix(0 -.38335 .36971 0 21.612 241.22)" d="m368.5 385.9h-3.1l-5.1-14.3h3.5l3.1 10.1 3.1-10.1h3.6z"/>\n  </g>\n  <path transform="matrix(0 -.38335 .36971 0 21.612 241.22)" d="m444.4 378.3h7.4v2.5h-1.5c-0.6 3.3-3 5.5-7.1 5.5-4.8 0-7.5-3.5-7.5-7.5 0-3.9 2.8-7.5 7.5-7.5 3.8 0 6.4 2.3 6.6 5h-3.5c-0.2-1.1-1.4-2.2-3.1-2.2-2.7 0-4.1 2.3-4.1 4.7 0 2.5 1.4 4.7 4.4 4.7 2 0 3.2-1.2 3.4-2.7h-2.5z"/>\n  <g stroke-width=".7028">\n   <path transform="matrix(0 -.38335 .36971 0 21.612 241.22)" d="m461.4 380.9v-9.3h3.3v14.3h-3.5l-5.2-9.2v9.2h-3.3v-14.3h3.5z"/>\n   <path transform="matrix(0 -.38335 .36971 0 21.612 241.22)" d="m472.7 371.6c4.8 0 7.5 3.5 7.5 7.2s-2.7 7.2-7.5 7.2h-5.3v-14.3h5.3zm-1.9 2.8v8.6h1.8c2.7 0 4.2-2.1 4.2-4.3s-1.6-4.3-4.2-4.3z"/>\n  </g>\n  <g fill="none">\n   <path transform="matrix(0 -.38335 .36971 0 21.612 241.22)" d="m35.9 376.4c0-2.8 2.1-5.1 5.5-5.1 3.3 0 5.5 2.4 5.5 5.1v4.7c0 2.8-2.2 5.1-5.5 5.1s-5.5-2.4-5.5-5.1zm7.6 0c0-1.3-0.8-2.3-2.2-2.3-1.3 0-2.1 1.1-2.1 2.3v4.7c0 1.2 0.8 2.3 2.1 2.3s2.2-1.1 2.2-2.3z"/>\n   <path transform="matrix(0 -.38335 .36971 0 21.612 241.22)" d="m136.5 374.1c2.8 0 3.4-0.8 3.4-2.5h2.9v14.3h-3.4v-9.5h-3v-2.3z"/>\n   <path transform="matrix(0 -.38335 .36971 0 21.612 241.22)" d="m248.9 378.5c1.7-1 3-1.7 3-3.1 0-1.1-0.7-1.6-1.6-1.6-1 0-1.8 0.6-1.8 2.1h-3.3c0-2.6 1.8-4.6 5.1-4.6 2.6 0 4.9 1.3 4.9 4.3 0 2.4-2.3 3.9-3.8 4.7-2 1.3-2.5 1.8-2.5 2.9h6.1v2.7h-10c0.1-4.7 1.7-6 3.9-7.4z"/>\n   <g stroke-width=".7028">\n    <path transform="matrix(0 -.38335 .36971 0 21.612 241.22)" d="m352.1 381.1c0 1.6 0.9 2.5 2.2 2.5 1.2 0 1.9-0.9 1.9-1.9 0-1.2-0.6-2-2.1-2h-1.3v-2.6h1.3c1.5 0 1.9-0.7 1.9-1.8s-0.7-1.6-1.6-1.6c-1.4 0-1.8 0.8-1.8 2.1h-3.3c0-2.4 1.5-4.6 5.1-4.6 2.6 0 5 1.3 5 4 0 1.6-1 2.8-2.1 3.2 1.3 0.5 2.3 1.6 2.3 3.5 0 2.7-2.4 4.3-5.2 4.3-3.5 0-5.5-2.1-5.5-5.1z"/>\n    <path transform="matrix(0 -.38335 .36971 0 21.612 241.22)" d="m368.5 385.9h-3.1l-5.1-14.3h3.5l3.1 10.1 3.1-10.1h3.6z"/>\n   </g>\n   <path transform="matrix(0 -.38335 .36971 0 21.612 241.22)" d="m444.4 378.3h7.4v2.5h-1.5c-0.6 3.3-3 5.5-7.1 5.5-4.8 0-7.5-3.5-7.5-7.5 0-3.9 2.8-7.5 7.5-7.5 3.8 0 6.4 2.3 6.6 5h-3.5c-0.2-1.1-1.4-2.2-3.1-2.2-2.7 0-4.1 2.3-4.1 4.7 0 2.5 1.4 4.7 4.4 4.7 2 0 3.2-1.2 3.4-2.7h-2.5z"/>\n   <g stroke-width=".7028">\n    <path transform="matrix(0 -.38335 .36971 0 21.612 241.22)" d="m461.4 380.9v-9.3h3.3v14.3h-3.5l-5.2-9.2v9.2h-3.3v-14.3h3.5z"/>\n    <path transform="matrix(0 -.38335 .36971 0 21.612 241.22)" d="m472.7 371.6c4.8 0 7.5 3.5 7.5 7.2s-2.7 7.2-7.5 7.2h-5.3v-14.3h5.3zm-1.9 2.8v8.6h1.8c2.7 0 4.2-2.1 4.2-4.3s-1.6-4.3-4.2-4.3z"/>\n   </g>\n   <g stroke-width=".3514">\n    <path transform="matrix(0 -.38335 .36971 0 21.629 241.2)" d="m35.9 376.4c0-2.8 2.1-5.1 5.5-5.1 3.3 0 5.5 2.4 5.5 5.1v4.7c0 2.8-2.2 5.1-5.5 5.1s-5.5-2.4-5.5-5.1zm7.6 0c0-1.3-0.8-2.3-2.2-2.3-1.3 0-2.1 1.1-2.1 2.3v4.7c0 1.2 0.8 2.3 2.1 2.3s2.2-1.1 2.2-2.3z" stroke="url(#I)" style="stroke:url(#I)"/>\n    <path transform="matrix(0 -.38335 .36971 0 21.639 241.16)" d="m136.5 374.1c2.8 0 3.4-0.8 3.4-2.5h2.9v14.3h-3.4v-9.5h-3v-2.3z" stroke="url(#J)" style="stroke:url(#J)"/>\n    <path transform="matrix(0 -.38335 .36971 0 21.668 241.16)" d="m248.9 378.5c1.7-1 3-1.7 3-3.1 0-1.1-0.7-1.6-1.6-1.6-1 0-1.8 0.6-1.8 2.1h-3.3c0-2.6 1.8-4.6 5.1-4.6 2.6 0 4.9 1.3 4.9 4.3 0 2.4-2.3 3.9-3.8 4.7-2 1.3-2.5 1.8-2.5 2.9h6.1v2.7h-10c0.1-4.7 1.7-6 3.9-7.4z" stroke="url(#K)" style="stroke:url(#K)"/>\n    <g transform="matrix(0 -.38335 .36971 0 21.656 241.2)" stroke="url(#L)" style="stroke:url(#L)">\n     <path d="m352.1 381.1c0 1.6 0.9 2.5 2.2 2.5 1.2 0 1.9-0.9 1.9-1.9 0-1.2-0.6-2-2.1-2h-1.3v-2.6h1.3c1.5 0 1.9-0.7 1.9-1.8s-0.7-1.6-1.6-1.6c-1.4 0-1.8 0.8-1.8 2.1h-3.3c0-2.4 1.5-4.6 5.1-4.6 2.6 0 5 1.3 5 4 0 1.6-1 2.8-2.1 3.2 1.3 0.5 2.3 1.6 2.3 3.5 0 2.7-2.4 4.3-5.2 4.3-3.5 0-5.5-2.1-5.5-5.1z" style="stroke:url(#L)"/>\n     <path d="m368.5 385.9h-3.1l-5.1-14.3h3.5l3.1 10.1 3.1-10.1h3.6z" style="stroke:url(#L)"/>\n    </g>\n    <path transform="matrix(0 -.38335 .36971 0 21.629 241.2)" d="m444.4 378.3h7.4v2.5h-1.5c-0.6 3.3-3 5.5-7.1 5.5-4.8 0-7.5-3.5-7.5-7.5 0-3.9 2.8-7.5 7.5-7.5 3.8 0 6.4 2.3 6.6 5h-3.5c-0.2-1.1-1.4-2.2-3.1-2.2-2.7 0-4.1 2.3-4.1 4.7 0 2.5 1.4 4.7 4.4 4.7 2 0 3.2-1.2 3.4-2.7h-2.5z" stroke="url(#O)" style="stroke:url(#O)"/>\n    <g transform="matrix(0 -.38335 .36971 0 21.629 241.2)" stroke="url(#Q)" style="stroke:url(#Q)">\n     <path d="m461.4 380.9v-9.3h3.3v14.3h-3.5l-5.2-9.2v9.2h-3.3v-14.3h3.5z" style="stroke:url(#Q)"/>\n     <path d="m472.7 371.6c4.8 0 7.5 3.5 7.5 7.2s-2.7 7.2-7.5 7.2h-5.3v-14.3h5.3zm-1.9 2.8v8.6h1.8c2.7 0 4.2-2.1 4.2-4.3s-1.6-4.3-4.2-4.3z" style="stroke:url(#Q)"/>\n    </g>\n   </g>\n   <g transform="matrix(0 -.38335 .36971 0 21.678 241.31)" stroke="url(#T)" stroke-width=".7028" style="stroke:url(#T)">\n    <path d="m0 357.7v19.2c0 10.8 6.2 20.2 14.4 25.2v-44.4z" style="stroke:url(#T)"/>\n    <path d="m483.6 402c8.2-5 14.4-14.4 14.4-25.1v-19.2h-14.4z" style="stroke:url(#T)"/>\n   </g>\n   <path transform="rotate(-90)" d="m-215.74 153.55h3.5268v18.227h-3.5268z" stroke="url(#V)" stroke-width=".26458" style="stroke:url(#V)"/>\n   <g stroke="url(#ab)" stroke-width=".26458">\n    <path d="m138.99 187.99c0 4.9068 3.808 8.472 8.5404 8.8553h24.253v-17.711h-24.253c-4.6954 0-8.5404 3.9485-8.5404 8.8553zm15.824-0.0767c0 4.1018-3.1795 7.3986-7.1355 7.3986s-7.1355-3.2968-7.1355-7.3986c0-4.1018 3.2165-7.3986 7.1355-7.3986 3.9559 0 7.1355 3.2968 7.1355 7.3986z" style="stroke:url(#ab)"/>\n    <path d="m138.99 145.86c0 4.9068 3.808 8.472 8.5404 8.8553h24.253v-17.711h-24.253c-4.6954 0-8.5404 3.9485-8.5404 8.8553zm15.824-0.15334c0 4.1018-3.1795 7.3986-7.1355 7.3986s-7.1355-3.2968-7.1355-7.3986 3.2165-7.3986 7.1355-7.3986c3.9559 0 7.1355 3.2968 7.1355 7.3986z" style="stroke:url(#ab)"/>\n    <path d="m138.99 103.34c0 4.9068 3.808 8.472 8.5404 8.8553h24.253v-17.711h-24.253c-4.6954 0-8.5404 3.9485-8.5404 8.8553zm15.824-0.0383c0 4.1018-3.1795 7.3986-7.1355 7.3986s-7.1355-3.2968-7.1355-7.3986 3.2165-7.3986 7.1355-7.3986c3.9559 0 7.1355 3.2968 7.1355 7.3986z" style="stroke:url(#ab)"/>\n    <path d="m139.1 65.736c0 4.9835 3.919 9.047 8.7252 9.047h0.037 23.92v-13.264c0-1.6484-0.36971-3.2201-0.99823-4.8302h-22.442-0.48062c-4.8802 0-8.7622 4.0635-8.7622 9.047zm16.009 0.07667c0 4.1018-3.1795 7.3986-7.1355 7.3986s-7.1355-3.2968-7.1355-7.3986 3.2165-7.3986 7.1355-7.3986 7.1355 3.3351 7.1355 7.3986z" style="stroke:url(#ab)"/>\n    <path d="m138.99 187.99c0 4.9068 3.808 8.472 8.5404 8.8553h24.253v-17.711h-24.253c-4.6954 0-8.5404 3.9485-8.5404 8.8553zm15.824-0.0767c0 4.1018-3.1795 7.3986-7.1355 7.3986s-7.1355-3.2968-7.1355-7.3986c0-4.1018 3.2165-7.3986 7.1355-7.3986 3.9559 0 7.1355 3.2968 7.1355 7.3986z" style="stroke:url(#ab)"/>\n    <path d="m138.99 187.99c0 4.9068 3.808 8.472 8.5404 8.8553h24.253v-17.711h-24.253c-4.6954 0-8.5404 3.9485-8.5404 8.8553zm15.824-0.0767c0 4.1018-3.1795 7.3986-7.1355 7.3986s-7.1355-3.2968-7.1355-7.3986c0-4.1018 3.2165-7.3986 7.1355-7.3986 3.9559 0 7.1355 3.2968 7.1355 7.3986z" style="stroke:url(#ab)"/>\n   </g>\n  </g>\n  <g id="LEDs" transform="matrix(1 0 0 -1 0 290.81)">\n   <use transform="rotate(-90 103.13 71.93)" width="100%" height="100%" xlink:href="#ac"/>\n   <use transform="rotate(-90 110.6 79.396)" width="100%" height="100%" xlink:href="#ac"/>\n   <use transform="rotate(-90 118.06 86.862)" width="100%" height="100%" xlink:href="#ac"/>\n   <use transform="rotate(-90 125.53 94.328)" width="100%" height="100%" xlink:href="#ac"/>\n   <use transform="rotate(-90 132.99 101.79)" width="100%" height="100%" xlink:href="#ac"/>\n   <use transform="rotate(-90 110.3 64.765)" width="100%" height="100%" xlink:href="#ac"/>\n   <use transform="rotate(-90 117.76 72.231)" width="100%" height="100%" xlink:href="#ac"/>\n   <use transform="rotate(-90 125.23 79.696)" width="100%" height="100%" xlink:href="#ac"/>\n   <use transform="rotate(-90 132.69 87.162)" width="100%" height="100%" xlink:href="#ac"/>\n   <use transform="rotate(-90 140.16 94.628)" width="100%" height="100%" xlink:href="#ac"/>\n   <use transform="rotate(-90 117.46 57.599)" width="100%" height="100%" xlink:href="#ac"/>\n   <use transform="rotate(-90 124.93 65.065)" width="100%" height="100%" xlink:href="#ac"/>\n   <use transform="rotate(-90 132.39 72.531)" width="100%" height="100%" xlink:href="#ac"/>\n   <use transform="rotate(-90 139.86 79.997)" width="100%" height="100%" xlink:href="#ac"/>\n   <use transform="rotate(-90 147.32 87.463)" width="100%" height="100%" xlink:href="#ac"/>\n   <use transform="rotate(-90 124.63 50.434)" width="100%" height="100%" xlink:href="#ac"/>\n   <use transform="rotate(-90 132.09 57.9)" width="100%" height="100%" xlink:href="#ac"/>\n   <use transform="rotate(-90 139.56 65.366)" width="100%" height="100%" xlink:href="#ac"/>\n   <use transform="rotate(-90 147.02 72.832)" width="100%" height="100%" xlink:href="#ac"/>\n   <use transform="rotate(-90 154.49 80.298)" width="100%" height="100%" xlink:href="#ac"/>\n   <use transform="rotate(-90 131.79 43.269)" width="100%" height="100%" xlink:href="#ac"/>\n   <use transform="rotate(-90 139.26 50.735)" width="100%" height="100%" xlink:href="#ac"/>\n   <use transform="rotate(-90 146.72 58.201)" width="100%" height="100%" xlink:href="#ac"/>\n   <use transform="rotate(-90 154.19 65.667)" width="100%" height="100%" xlink:href="#ac"/>\n   <use transform="rotate(-90 161.65 73.132)" width="100%" height="100%" xlink:href="#ac"/>\n  </g>\n  <g id="Pins">\n   <path id="af" transform="rotate(-90)" d="m-215.74 153.55h3.5268v18.227h-3.5268z" fill="url(#ad)" stroke="url(#ae)" stroke-width=".3" style="fill:url(#ad);stroke:url(#ae)"/>\n   <use width="100%" height="100%" xlink:href="#af"/>\n   <use transform="translate(0 -4.707)" width="100%" height="100%" xlink:href="#af"/>\n   <use transform="translate(0 -9.4139)" width="100%" height="100%" xlink:href="#af"/>\n   <use transform="translate(0 -14.121)" width="100%" height="100%" xlink:href="#af"/>\n   <use transform="translate(0 -37.656)" width="100%" height="100%" xlink:href="#af"/>\n   <use transform="translate(0 -42.363)" width="100%" height="100%" xlink:href="#af"/>\n   <use transform="translate(0 -47.07)" width="100%" height="100%" xlink:href="#af"/>\n   <use transform="translate(0 -51.776)" width="100%" height="100%" xlink:href="#af"/>\n   <use transform="translate(0 -56.483)" width="100%" height="100%" xlink:href="#af"/>\n   <use transform="translate(0 -80.018)" width="100%" height="100%" xlink:href="#af"/>\n   <use transform="translate(0 -84.725)" width="100%" height="100%" xlink:href="#af"/>\n   <use transform="translate(0 -89.432)" width="100%" height="100%" xlink:href="#af"/>\n   <use transform="translate(0 -94.139)" width="100%" height="100%" xlink:href="#af"/>\n   <use transform="translate(0 -98.846)" width="100%" height="100%" xlink:href="#af"/>\n   <use transform="translate(0 -122.38)" width="100%" height="100%" xlink:href="#af"/>\n   <use transform="translate(0 -127.09)" width="100%" height="100%" xlink:href="#af"/>\n   <use transform="translate(0 -131.79)" width="100%" height="100%" xlink:href="#af"/>\n   <use transform="translate(0 -136.5)" width="100%" height="100%" xlink:href="#af"/>\n   <path d="m138.99 225.8c0 4.9068 3.808 8.472 8.5404 8.8553h24.253v-17.711h-24.253c-4.6954 0-8.5404 3.9485-8.5404 8.8553zm15.824-0.0767c0 4.1018-3.1795 7.3986-7.1355 7.3986s-7.1355-3.2968-7.1355-7.3986c0-4.1018 3.2165-7.3986 7.1355-7.3986 3.9559 0 7.1355 3.2968 7.1355 7.3986z" fill="none" stroke="url(#ag)" stroke-width=".26458" style="stroke:url(#ag)"/>\n  </g>\n </g>\n <g id="Logo" transform="matrix(.7019 0 0 .7019 80.008 22.174)" stroke="#ffffff" stroke-width=".23508" style="fill:url(#aj)">\n  <rect class="outline" width="46" height="31" rx="0" ry="0" fill="none" stroke-width="0"/>\n  <path class="no-edit" d="m32.8,28.4 H 13.3 c -7.2,0 -13,-5.8 -13,-13 0,-7.2 5.8,-13 13,-13 h 19.5 c 7.2,0 13,5.8 13,13 0,7.2 -5.9,13 -13,13" fill="#1a1a1a" stroke-width="0" />\n  <path class="st10" d="m32.5 18c1.5 0 2.6-1.2 2.6-2.6s-1.2-2.6-2.6-2.6c-1.5 0-2.6 1.2-2.6 2.6s1.2 2.6 2.6 2.6" fill="url(#aj)" stroke="url(#ak)" style="fill:url(#aj);stroke:url(#ak)"/>\n  <path class="st11" d="m13.3 12.8c-1.5 0-2.6 1.2-2.6 2.6s1.2 2.6 2.6 2.6 2.6-1.2 2.6-2.6-1.2-2.6-2.6-2.6" fill="url(#aj)" stroke="url(#am)" style="fill:url(#aj);stroke:url(#am)"/>\n  <path class="st12" d="m13.3 7.6c-4.3 0-7.8 3.5-7.8 7.8s3.5 7.8 7.8 7.8h19.5c4.3 0 7.8-3.5 7.8-7.8s-3.5-7.8-7.8-7.8h-19.5m19.5 20.8h-19.5c-7.2 0-13-5.8-13-13s5.8-13 13-13h19.5c7.2 0 13 5.8 13 13s-5.9 13-13 13" fill="url(#an)" stroke="url(#ao)" style="fill:url(#an);stroke:url(#ao)"/>\n </g>\n <path id="MicrophoneHole" d="m124.3 39.211c-0.867 0-1.5028 0.69355-1.5028 1.5028 0 0.8092 0.69355 1.5027 1.5028 1.5027 0.867 0 1.5028-0.69355 1.5028-1.5027 0-0.8092-0.69355-1.5028-1.5028-1.5028zm0 0.17415a1.3287 1.3287 0 0 1 1.3286 1.3286 1.3287 1.3287 0 0 1-1.3286 1.3286 1.3287 1.3287 0 0 1-1.3286-1.3286 1.3287 1.3287 0 0 1 1.3286-1.3286z" fill="url(#ap)" stroke="url(#aq)" stroke-width=".13588" style="fill:url(#ap);stroke:url(#aq)"/>\n <g id="ButtonA" transform="rotate(90 128.8 112.64)">\n  <rect class="outline" x="86.343" y="209.89" width="21.013" height="21.013" rx="0" ry="0"/>\n  <path transform="scale(1,-1)" d="m86.343-209.89h21.013v0.77824h-21.013z" fill="#b3b3b3"/>\n  <path transform="matrix(0,1,1,0,0,0)" d="m209.89 107.36h21.013v1.0617h-21.013z" fill="#666666"/>\n  <rect transform="matrix(0,1,1,0,0,0)" x="209.89" y="85.565" width="21.013" height=".77824" rx="0" ry="0" fill="url(#ar)" style="fill:url(#ar)"/>\n  <g transform="matrix(0 -.35278 -.35278 0 174.44 400.27)" fill="url(#as)" stroke-width="2.25">\n   <rect x="486.87" y="251.85" width="4.4121" height="2.206" rx="0" ry="0" style="fill:url(#as)"/>\n   <rect x="528.94" y="251.85" width="4.4121" height="2.206" rx="0" ry="0" style="fill:url(#as)"/>\n  </g>\n  <g transform="matrix(0 .35278 .35278 0 19.232 40.362)" fill="url(#as)" stroke-width="2.25">\n   <rect x="486.87" y="251.85" width="4.4121" height="2.206" rx="0" ry="0" style="fill:url(#as)"/>\n   <rect x="528.94" y="251.85" width="4.4121" height="2.206" rx="0" ry="0" style="fill:url(#as)"/>\n  </g>\n  <rect transform="scale(1,-1)" x="86.343" y="-231.69" width="21.013" height=".77824" rx="0" ry="0" fill="url(#aw)" style="fill:url(#aw)"/>\n  <rect x="86.343" y="209.89" width="21.013" height="21.013" rx="0" ry="0" fill="url(#ax)" style="fill:url(#ax)"/>\n  <rect x="86.343" y="209.89" width="21.013" height="21.013" rx="0" ry="0" fill="url(#ax)" opacity=".5" stroke="url(#az)" stroke-width=".13229" style="fill:url(#ax);stroke:url(#az)"/>\n  <circle cx="96.849" cy="220.4" r="5.7384" fill="#000000"/>\n </g>\n <g id="ButtonB" transform="rotate(90 204.38 188.22)">\n  <rect class="outline" x="86.343" y="209.89" width="21.013" height="21.013" rx="0" ry="0"/>\n  <path transform="scale(1,-1)" d="m86.343-209.89h21.013v0.77824h-21.013z" fill="#b3b3b3"/>\n  <path transform="matrix(0,1,1,0,0,0)" d="m209.89 107.36h21.013v1.0617h-21.013z" fill="#666666"/>\n  <rect transform="matrix(0,1,1,0,0,0)" x="209.89" y="85.565" width="21.013" height=".77824" rx="0" ry="0" fill="url(#ar)" style="fill:url(#ar)"/>\n  <g transform="matrix(0 -.35278 -.35278 0 174.44 400.27)" fill="url(#as)" stroke-width="2.25">\n   <rect x="486.87" y="251.85" width="4.4121" height="2.206" rx="0" ry="0" style="fill:url(#as)"/>\n   <rect x="528.94" y="251.85" width="4.4121" height="2.206" rx="0" ry="0" style="fill:url(#as)"/>\n  </g>\n  <g transform="matrix(0 .35278 .35278 0 19.232 40.362)" fill="url(#as)" stroke-width="2.25">\n   <rect x="486.87" y="251.85" width="4.4121" height="2.206" rx="0" ry="0" style="fill:url(#as)"/>\n   <rect x="528.94" y="251.85" width="4.4121" height="2.206" rx="0" ry="0" style="fill:url(#as)"/>\n  </g>\n  <rect transform="scale(1,-1)" x="86.343" y="-231.69" width="21.013" height=".77824" rx="0" ry="0" fill="url(#aw)" style="fill:url(#aw)"/>\n  <rect x="86.343" y="209.89" width="21.013" height="21.013" rx="0" ry="0" fill="url(#ax)" style="fill:url(#ax)"/>\n  <rect x="86.343" y="209.89" width="21.013" height="21.013" rx="0" ry="0" fill="url(#ax)" opacity=".5" stroke="url(#az)" stroke-width=".13229" style="fill:url(#ax);stroke:url(#az)"/>\n  <circle cx="96.849" cy="220.4" r="5.7384" fill="#000000"/>\n </g>\n <g id="LEDTemplate" transform="translate(-7.641 -1.4302)" display="none">\n  <g id="ac" transform="matrix(0 .14526 -.14526 0 154.68 1.8239)" display="inline" stroke-width="2.4286" style="opacity: 0.2">\n   <rect transform="rotate(-90)" x="-702.9" y="215.41" width="95.593" height="94.587" ry="3.68" fill="none"/>\n   <rect x="236.87" y="646.27" width="50.853" height="17.811" rx="0" ry="0" fill="url(#aF)" stroke-width="5.4645" style="fill:url(#aF)"/>\n   <rect x="246.83" y="644.93" width="30.673" height="20.485" rx="0" ry="0" fill="#e6e6e6" opacity=".5" stroke="url(#aG)" stroke-width=".91074" style="stroke:url(#aG)"/>\n   <rect x="236.87" y="646.27" width="10.804" height="17.811" rx="0" ry="0" fill="url(#aH)" stroke-width="5.4645" style="fill:url(#aH)"/>\n   <rect x="235.72" y="646.27" width="11.952" height="17.811" rx="0" ry="0" fill="url(#aI)" stroke-width="5.4645" style="fill:url(#aI)"/>\n   <rect transform="scale(-1)" x="-289.63" y="-664.08" width="12.048" height="17.811" rx="0" ry="0" fill="url(#aJ)" stroke-width="5.4645" style="fill:url(#aJ)"/>\n   <rect x="244.78" y="643.4" width="35.715" height="23.668" rx="0" ry="0" fill="#cccccc" opacity=".5" stroke-width=".91074"/>\n   <rect transform="scale(-1)" x="-288.39" y="-661.56" width="7.9501" height="12.92" rx="0" ry="0" fill="url(#aK)" stroke-width="5.4645" style="fill:url(#aK)"/>\n   <rect transform="scale(1,-1)" x="236.87" y="-663.12" width="8.1235" height="15.916" rx="0" ry="0" fill="url(#aL)" opacity=".7" stroke-width="5.4645" style="fill:url(#aL)"/>\n   <rect transform="scale(-1,1)" x="-280.3" y="643.47" width="35.187" height="23.277" rx="0" ry="0" fill="#cccccc" opacity=".5" stroke="url(#aM)" stroke-width=".91074" style="stroke:url(#aM)"/>\n   <rect x="240.59" y="646.21" width="4.4552" height="17.866" rx="0" ry="0" fill="url(#aN)" stroke-width="5.4645" style="fill:url(#aN)"/>\n   <rect transform="scale(-1)" x="-284.83" y="-664.08" width="4.4552" height="17.866" rx="0" ry="0" fill="url(#aO)" stroke-width="5.4645" style="fill:url(#aO)"/>\n   <rect transform="scale(-1,1)" x="-280.3" y="643.47" width="35.187" height="23.277" rx="0" ry="0" fill="url(#aP)" opacity=".5" stroke="url(#aM)" stroke-width=".91074" style="fill:url(#aP);stroke:url(#aM)"/>\n  </g>\n </g>\n <g id="LitLEDTemplate" transform="translate(-7.641 -1.4302)" display="none">\n  <g id="aZ" transform="translate(-6.6465 -9.5182)" display="inline">\n   <rect transform="matrix(2.3877 0 0 2.1458 -91.817 -56.721)" x="64.869" y="47.293" width="2.5871" height="4.4164" ry=".73499" fill="#ff0000" filter="url(#aR)" opacity=".7" stroke="#ff0000" stroke-width=".13253"/>\n   <rect transform="matrix(1.8006 0 0 1.7099 -52.973 -35.14)" x="64.869" y="47.293" width="2.5871" height="4.4164" ry=".73499" fill="#ff0000" filter="url(#aS)" stroke="#ff0000" stroke-width=".17097"/>\n   <rect x="64.869" y="47.293" width="2.5871" height="4.4164" ry=".73499" fill="#ff0000" filter="url(#aT)" stroke="#ff0000" stroke-width=".3"/>\n   <rect x="64.869" y="47.293" width="2.5871" height="4.4164" ry=".53454" fill="#ff8080" filter="url(#aU)" stroke="#ff0000" stroke-width=".3"/>\n   <rect transform="matrix(0 -.37909 .19481 0 56.124 73.83)" x="64.869" y="47.293" width="2.5871" height="4.4164" ry=".73499" fill="#ffffff" filter="url(#aV)" stroke-width="1.1039"/>\n  </g>\n </g>\n <path id="UnlitMicrophone" d="m130.69 34.836c-0.58079 0-1.0516 0.47171-1.0516 1.0521v1.9926c0 0.58116 0.47081 1.0516 1.0516 1.0516 0.58019 0 1.0516-0.47045 1.0516-1.0516v-1.9926c0-0.58041-0.47141-1.0521-1.0516-1.0521zm-2.3089 3.3946c0 1.0808 0.79763 1.9206 1.7983 2.1456v0.54311h-1.1539v0.84438h3.3708v-0.84438h-1.1565v-0.54311c1.001-0.22458 1.8009-1.0645 1.8009-2.1456h-0.76118c0 0.82898-0.71407 1.4474-1.5694 1.4474-0.85621 0-1.5678-0.61864-1.5678-1.4474z" clip-rule="evenodd" fill="#4d4d4d" fill-rule="evenodd" style="stroke-width:.26458"/>\n <g id="LitMicrophone" transform="translate(-7.641 -1.4302)" clip-rule="evenodd" display="none" fill-rule="evenodd">\n  <path transform="matrix(.26458 0 0 .26458 134.44 34.628)" d="m14.673 4.3124-0.0977 0.0156-0.7832 0.084h-0.012l-0.0898 0.01h-0.0529l-8e-3 8e-3 -8e-3 4e-3 -6e-3 2e-3 -0.01 4e-3h-2e-3l-0.0937 0.0293-0.71094 0.21875h-0.01l-0.0156 6e-3 -4e-3 2e-3 -0.0156 4e-3 -0.10351 0.0332-6e-3 2e-3 -0.01 4e-3 -0.0371 8e-3 -0.0215 0.0215-0.0801 0.0469h-2e-3l-0.61329 0.33203h-6e-3l-0.0273 0.0156-0.0293 0.0156h-2e-3l-0.0918 0.0508-0.0588 0.0294-0.0176 0.0215-0.0156 0.0195v2e-3l-4e-3 2e-3 -0.0508 0.043-0.01 4e-3 -0.0137 0.0156-2e-3 2e-3 -8e-3 6e-3 -0.56446 0.46485-0.0703 0.0586v2e-3l-8e-3 4e-3v2e-3h-2e-3l-8e-3 4e-3 -0.0176 0.0117-0.0195 0.0137-0.0137 0.0195-6e-3 8e-3 -2e-3 2e-3 -2e-3 6e-3 -4e-3 4e-3 -2e-3 4e-3 -2e-3 2e-3 -0.0703 0.084-0.48828 0.58984-0.0606 0.0742-4e-3 4e-3 -4e-3 2e-3v2e-3l-4e-3 4e-3 -4e-3 6e-3 -4e-3 4e-3 -0.0117 0.01-8e-3 0.0176v2e-3l-4e-3 6e-3 -2e-3 2e-3 -4e-3 8e-3 -0.0137 0.0215v2e-3l-0.0293 0.0508-0.0254 0.0254v0.0215l-0.16602 0.27539-4e-3 6e-3v2e-3h-2e-3l-0.0273 0.043-8e-3 6e-3 -4e-3 0.01v2e-3l-0.0137 0.0137-2e-3 8e-3 -4e-3 6e-3 -2e-3 8e-3 -4e-3 6e-3 -0.0312 0.0645-0.01 0.0234v2e-3h-2e-3l-0.15625 0.32226v2e-3l-0.0234 0.0508v6e-3l-4e-3 6e-3 -4e-3 8e-3 -6e-3 8e-3 -6e-3 0.0156-2e-3 6e-3 -0.0254 0.0664-6e-3 0.0156-0.0117 0.0234v0.01l-0.11914 0.32031-4e-3 0.01h-0.0371v0.10947l-2e-3 6e-3 -2e-3 4e-3v4e-3l-0.0215 0.0859-0.0937 0.37696-2e-3 4e-3 -4e-3 0.016-4e-3 0.0117v0.016l-6e-3 0.012-0.0137 0.0273v0.043l-8e-3 0.0469-2e-3 6e-3v2e-3l-4e-3 0.016v0.0216l-0.0566 0.34961-2e-3 8e-3 -2e-3 6e-3v4e-3l-0.0117 0.0664v2e-3l-2e-3 6e-3v2e-3l-4e-3 0.0137-4e-3 0.0156v0.0373l-6e-3 0.0898v0.018l-0.0176 0.39648v7.3599h-4.8262l6e-3 0.13086 6e-3 0.13085 6e-3 0.13086 0.0586 1.2793 0.0371 0.74219v0.026l4e-3 0.0332v0.0413l4e-3 0.0156v6e-3l4e-3 0.01 2e-3 0.01v2e-3l2e-3 4e-3 4e-3 0.0215v4e-3l0.0937 0.68946 4e-3 0.0449v0.0471l6e-3 0.0176 4e-3 0.0117v4e-3l2e-3 4e-3v4e-3l2e-3 2e-3 6e-3 0.0254 6e-3 0.0234 0.1582 0.67188v0.01l4e-3 0.0137 2e-3 6e-3 4e-3 0.0117 6e-3 0.0195v0.01l6e-3 0.0176 6e-3 0.0195v4e-3l2e-3 4e-3v2e-3l6e-3 0.0176v6e-3l6e-3 0.0117v6e-3l6e-3 0.0195 0.23047 0.67969h2e-3l0.0215 0.0644 2e-3 2e-3 4e-3 0.0156 0.0293 0.0859h0.0137l0.26368 0.60546h2e-3l0.0176 0.0391 0.0156 0.0352 4e-3 8e-3 0.0273 0.0664h8e-3l0.0195 0.0371 0.0352 0.0664h6e-3l0.23828 0.43554v0.01l0.0195 0.0293 8e-3 0.0117 2e-3 2e-3v2e-3l2e-3 6e-3 4e-3 8e-3 8e-3 0.0176 6e-3 6e-3 6e-3 8e-3v0.1797h0.11914l0.30469 0.45899 6e-3 0.0117 8e-3 0.0176 6e-3 6e-3 0.0156 0.0234h2e-3v2e-3l8e-3 0.012 2e-3 4e-3 6e-3 6e-3 2e-3 4e-3 4e-3 4e-3 0.0156 0.0254 0.012 6e-3 0.0137 0.0137 8e-3 0.01 0.0293 0.0332 8e-3 8e-3 0.39258 0.49414 8e-3 0.01v0.0352l0.0449 0.0215 2e-3 6e-3 0.0176 0.0391 0.0391 0.0195 6e-3 4e-3 0.38086 0.40039v0.1543h0.1406l0.0137 0.0117 2e-3 2e-3 2e-3 4e-3 2e-3 2e-3 0.52344 0.46875 4e-3 2e-3 0.0332 0.0293 8e-3 0.01 0.0215 0.0137h2e-3l8e-3 6e-3 0.01 6e-3 2e-3 2e-3 0.0332 0.0352h0.0117l0.52149 0.40039 0.0371 0.0274 4e-3 4e-3v2e-3l0.01 6e-3 2e-3 2e-3h2e-3l2e-3 2e-3 6e-3 8e-3 8e-3 2e-3 4e-3 4e-3h6e-3l0.01 8e-3h4e-3l6e-3 6e-3h2e-3l6e-3 6e-3 0.58203 0.375 0.01 6e-3 0.012 8e-3 4e-3 2e-3 4e-3 4e-3 0.082 0.0468h4e-3l0.0293 0.0156h2e-3l0.0254 0.0156h4e-3l0.13281 0.0723h-2.7305v6.3867h15.936v-6.3867h-2.7383l0.13086-0.0723h0.0528l0.0352-0.0371 0.0156-0.0176 8e-3 -2e-3 0.01-6e-3h0.0195l8e-3 -8e-3h8e-3l0.0254-0.0254 0.58398-0.37695 4e-3 -4e-3 0.0254-0.0195h2e-3l2e-3 -2e-3 8e-3 -4e-3 2e-3 -2e-3 0.0215-0.01 0.0176-0.0215v-2e-3l4e-3 -4e-3 0.0137-8e-3 4e-3 -4e-3h2e-3l0.0547-0.0371v-8e-3l0.5-0.38086 4e-3 -2e-3 0.0176-0.0137h4e-3l0.01-0.01 0.0156-0.0117 0.01-8e-3 0.0371-0.0312 2e-3 -2e-3h2e-3l0.52344-0.46875 2e-3 -2e-3 2e-3 -4e-3 0.01-0.01h0.0723v-0.0391h0.0391v-0.0781l0.41602-0.4375 6e-3 -4e-3 0.0391-0.0195 0.0176-0.0391 2e-3 -6e-3 0.0449-0.0215v-0.0352l8e-3 -0.01 0.42578-0.5332 8e-3 -8e-3 4e-3 -6e-3 2e-3 -2e-3 6e-3 -8e-3 0.0196-0.0196 4e-3 -6e-3 6e-3 -8e-3 8e-3 -8e-3 2e-3 -8e-3h2e-3v-2e-3l0.0234-0.0215 2e-3 -2e-3 4e-3 -2e-3 0.01-0.0273 0.37891-0.56641 2e-3 -2e-3 4e-3 -8e-3 2e-3 -2e-3 2e-3 -4e-3 2e-3 -2e-3 0.0234-0.0332 2e-3 -4e-3 4e-3 -4e-3 2e-3 -6e-3 4e-3 -4e-3v-2e-3l8e-3 -0.0137 0.01-0.0137v-6e-3l8e-3 -0.0137 2e-3 -2e-3v-2e-3l2e-3 -4e-3 6e-3 -0.0137 2e-3 -2e-3 8e-3 -0.0176 6e-3 -0.01 0.32031-0.58008 0.0156-0.0273 4e-3 -4e-3 4e-3 -0.01v-2e-3l2e-3 -2e-3v-2e-3l4e-3 -4e-3v-2e-3l8e-3 -0.01 4e-3 -0.0117 4e-3 -0.01 2e-3 -4e-3v-2e-3l2e-3 -2e-3 2e-3 -6e-3v-2e-3l0.0137-0.0274 2e-3 -6e-3 6e-3 -0.0137 4e-3 -6e-3v-2e-3l0.27539-0.62305v-2e-3l0.0117-0.0293 0.01-0.02 2e-3 -6e-3 6e-3 -0.012 0.0137-0.0273v-8e-3l6e-3 -0.0156 6e-3 -0.0195 2e-3 -2e-3v-2e-3l2e-3 -6e-3 6e-3 -0.0137v-4e-3l0.21094-0.63476v-2e-3l4e-3 -8e-3v-2e-3l2e-3 -4e-3 8e-3 -0.0215 2e-3 -2e-3 6e-3 -0.0215 4e-3 -8e-3 4e-3 -0.012v-4e-3l4e-3 -0.0117 2e-3 -4e-3v-4e-3l0.01-0.043 2e-3 -4e-3 4e-3 -0.016 4e-3 -0.0117v-0.01l0.1582-0.67188v-2e-3l6e-3 -0.0254 8e-3 -0.0156 0.0137-0.0274v-0.0686l4e-3 -0.0449 0.0937-0.68945v-4e-3l4e-3 -0.0215 2e-3 -4e-3v-2e-3l2e-3 -0.01 4e-3 -0.01v-6e-3l4e-3 -0.0156v-0.0393l4e-3 -0.0332v-0.026l0.0371-0.74219 0.0586-1.2793 0.018-0.39258h-4.9824v-7.3426l-4e-3 -0.0293v-0.016l-0.0234-0.38867v-0.014l-4e-3 -0.0742v-0.042l-0.01-0.082h-2e-3v-2e-3l-6e-3 -0.043-4e-3 -0.041-6e-3 -6e-3 -0.043-0.27149v-0.0277l-4e-3 -0.0234v-2e-3l-0.0156-0.082v-8e-3l-4e-3 -0.0117v-0.0157l-8e-3 -0.0176-0.0195-0.0742-0.0918-0.3457v-4e-3l-4e-3 -0.0176-4e-3 -0.0137v6e-3l-0.0176-0.0723v-0.0449l-0.0176-0.0156-0.0254-0.0723-0.11914-0.32032v-4e-3l-0.016-0.043v-2e-3l-0.0274-0.0723-2e-3 -6e-3 -4e-3 -6e-3 -6e-3 -0.0117-4e-3 -8e-3 -2e-3 -2e-3 -2e-3 -4e-3 -2e-3 -2e-3v-2e-3l-2e-3 -2e-3 -4e-3 -8e-3 -0.0195-0.043-6e-3 -0.01-4e-3 -0.01-4e-3 -4e-3 -2e-3 -4e-3 -0.0137-0.0254-0.11523-0.24219v-4e-3l-0.0117-0.0215v-4e-3l-2e-3 -2e-3 -0.01-0.0234-0.0312-0.0644-4e-3 -6e-3 -2e-3 -8e-3 -4e-3 -6e-3 -2e-3 -8e-3 -0.0137-0.0137v-2e-3l-4e-3 -0.01-8e-3 -6e-3 -0.0254-0.0391-4e-3 -8e-3 -0.15625-0.25781v-4e-3l-0.0176-0.0273-2e-3 -4e-3 -6e-3 -0.01-0.01-0.0156-2e-3 -2e-3 -0.0449-0.0742-4e-3 -8e-3 -4e-3 -6e-3 -4e-3 -8e-3 -4e-3 -6e-3 -2e-3 -2e-3 -2e-3 -4e-3v-2e-3l-4e-3 -6e-3 -2e-3 -2e-3 -4e-3 -8e-3 -2e-3 -2e-3 -0.0352-0.0449v-0.0117l-0.0293-0.0273-0.01-0.01v-2e-3l-0.48437-0.58984-0.018-0.018-0.0625-0.0723-0.0177-0.0236-0.0137-0.0195-0.0195-0.0117-4e-3 -4e-3 -6e-3 -2e-3h-2e-3v-2e-3l-2e-3 -2e-3h-2e-3l-4e-3 -4e-3 -0.0781-0.0664-0.54883-0.45117-0.0234-0.0215-2e-3 -2e-3 -0.0137-0.0156-0.01-4e-3 -0.0684-0.0586-0.01-0.01-0.0117-0.01h-2e-3l-8e-3 -8e-3v-2e-3l-6e-3 -2e-3 -4e-3 -4e-3 -0.0117-8e-3 -0.024-0.016-0.10351-0.0547-0.18359-0.0957v2e-3l-0.49219-0.26367h4e-3l-0.0273-0.0156-0.0586-0.0332h-4e-3v-2e-3h-2e-3l-4e-3 -2e-3 -0.0176-0.0156-0.0234-4e-3 -0.016-8e-3 -0.0977-0.0332h-6e-3l-0.0195-6e-3 -0.0176-6e-3h-8e-3l-0.70703-0.21875-6e-3 -2e-3 -0.0117-4e-3 -0.0117-6e-3h-0.0137l-0.0566-0.0176-8e-3 -4e-3 -0.01-2e-3 -6e-3 -2e-3h-4e-3l-6e-3 -2e-3h-2e-3l-4e-3 -2e-3 -6e-3 -2e-3 -8e-3 -4e-3h-6e-3l-0.0176-2e-3 -0.0977-0.01h-0.012l-0.78321-0.084-0.10351-0.0117h-0.0814z" display="inline" enable-background="new" fill="#ff0000" filter="url(#aW)" style="mix-blend-mode:normal"/>\n  <path transform="scale(.26458)" d="m522.83 137.07c-2.1951 0-3.9746 1.7829-3.9746 3.9766v7.5312c0 2.1965 1.7795 3.9746 3.9746 3.9746 2.1929 0 3.9746-1.7781 3.9746-3.9746v-7.5312c0-2.1937-1.7818-3.9766-3.9746-3.9766zm-8.7266 12.83c0 4.085 3.0147 7.2592 6.7969 8.1094v2.0527h-4.3613v3.1914h12.74v-3.1914h-4.3711v-2.0527c3.7832-0.84883 6.8066-4.0234 6.8066-8.1094h-2.877c0 3.1332-2.6989 5.4707-5.9316 5.4707-3.2361 0-5.9258-2.3382-5.9258-5.4707z" display="inline" enable-background="new" fill="#ff5555"/>\n  <path d="m138.19 36.413-0.0884 0.01292-0.0842 0.02222-0.0884 0.03204-0.0755 0.03617-0.0806 0.04909-3e-3 0.0016-0.0636 0.04754-0.0656 0.06046-0.0605 0.06563-0.0475 0.06356-2e-3 0.0026-0.0491 0.08062-0.0362 0.07545-0.032 0.08837-0.0222 0.08423-0.0129 0.08837-6e-3 0.10284v1.9782l6e-3 0.10284 0.0129 0.08837 0.0222 0.08423 0.032 0.08836 0.0362 0.07545 0.0491 0.08062 2e-3 0.0026 0.0475 0.06356 0.0605 0.06563 0.0656 0.06046 0.0636 0.04754 3e-3 0.0016 0.0822 0.04961 2e-3 0.0016 0.0724 0.0341 0.0868 0.03204 0.0816 0.02119 0.093 0.01447 0.0946 0.0041 0.0946-0.0041 0.093-0.01447 0.0811-0.02067 0.0868-0.03256 0.0724-0.0341 2e-3 -0.0016 0.0822-0.04961 3e-3 -0.0016 0.0636-0.04754 0.0682-0.06304 2e-3 -0.0016 0.0527-0.05839 0.0501-0.06666 2e-3 -0.0026 0.0491-0.08062 0.0377-0.07855 0.031-0.08423 0.0212-0.08268 0.0134-0.09095 6e-3 -0.10284v-1.9782l-6e-3 -0.10284-0.0134-0.09095-0.0212-0.08268-0.031-0.08423-0.0377-0.07855-0.0491-0.08062-2e-3 -0.0026-0.0501-0.06666-0.0527-0.05839-2e-3 -0.0016-0.0682-0.06305-0.0636-0.04754-3e-3 -0.0016-0.0806-0.04909-0.0801-0.03824-0.078-0.02894-0.0894-0.02326-0.0884-0.01292-0.0956-0.0052zm-2.0655 3.4329 5.1e-4 0.0021v0.0036l0.0109 0.09147 0.0134 0.08268 0.0202 0.09405 0.0201 0.08062 2e-3 0.0072 0.0248 0.07803 2e-3 0.0052 0.0274 0.077 2e-3 0.0031 1e-3 0.0036 0.0315 0.07493 2e-3 0.0052 0.0372 0.07958 0.0372 0.07183 3e-3 0.0052 0.0403 0.06977 4e-3 0.0057 0.0434 0.06821 2e-3 0.0021 2e-3 0.0026 0.045 0.06408 1e-3 1e-3 0.11162 0.14004 0.11421 0.12144 3e-3 0.0026 0.1354 0.12144 0.13487 0.10284 0.14314 0.09302 2e-3 5.16e-4 0.15503 0.08372 4e-3 0.0016 0.16899 0.07493 0.15864 0.05633 3e-3 5.19e-4 0.18241 0.04857 0.10439 0.02791v0.79065h-1.1539v0.56431h3.0908v-0.56431h-1.156v-0.79082l0.10439-0.02791 0.17415-0.04599 3e-3 -1e-3 0.17518-0.06098 2e-3 -1e-3 0.15296-0.0677 1e-3 -5.16e-4 0.16174-0.08733 3e-3 -0.0016 0.14367-0.09302 0.13952-0.10594 0.13074-0.11834 3e-3 -0.0021 0.11834-0.12506 2e-3 -0.0021 0.10284-0.12867 5.2e-4 -1e-3 0.0491-0.06977 4e-3 -0.0052 0.0434-0.06925 5.2e-4 -5.16e-4 2e-3 -0.0036 0.0408-0.06925 3e-3 -0.0047 1e-3 -0.0021 0.0372-0.07183 2e-3 -0.0047 0.0346-0.0739 0.0336-0.08113 2e-3 -0.0052v-5.16e-4l0.0279-0.077 2e-3 -0.0062 0.0243-0.07855 1e-3 -0.0047 5.1e-4 -1e-3 0.0212-0.0801 1e-3 -0.0041 5.2e-4 -0.0026 0.0186-0.08785 0.0134-0.0832 0.0109-0.09147v-0.0036l5.2e-4 -0.0021 3e-3 -0.04393h-0.48266l-2e-3 0.02429-5.1e-4 0.0041-5.2e-4 0.0036-0.0103 0.07441-0.00104 0.0072-0.014 0.07286-5.2e-4 0.0036-1e-3 0.0036-0.0176 0.07131-2e-3 0.0072-0.0212 0.06976-4e-3 0.0114-0.0538 0.13436-3e-3 0.0067-3e-3 0.0062-0.0667 0.12712-8e-3 0.0124-0.0796 0.11937-4e-3 0.0062-5e-3 0.0052-0.091 0.11059-4e-3 0.0052-5e-3 0.0052-0.1018 0.1018-5e-3 0.0047-5e-3 0.0041-0.11163 0.09199-5e-3 0.0041-6e-3 0.0041-0.12144 0.08165-5e-3 0.0036-6e-3 0.0031-0.12919 0.07028-5e-3 0.0031-6e-3 0.0026-0.13694 0.05943-6e-3 0.0026-6e-3 0.0016-0.14366 0.04702-6e-3 0.0021-6e-3 0.0016-0.14934 0.03411-6e-3 0.0015-6e-3 5.16e-4 -0.15451 0.02119-6e-3 1e-3 -7e-3 5.16e-4 -0.15865 0.0072h-0.012l-0.15864-0.0072-7e-3 -5.16e-4 -6e-3 -1e-3 -0.15452-0.02119-6e-3 -5.16e-4 -6e-3 -0.0015-0.14935-0.03411-6e-3 -0.0016-6e-3 -0.0021-0.14366-0.04702-6e-3 -0.0016-6e-3 -0.0026-0.13694-0.05943-6e-3 -0.0026-5e-3 -0.0031-0.12919-0.07028-6e-3 -0.0031-6e-3 -0.0036-0.12092-0.08165-0.01-0.0082-0.11162-0.09199-5e-3 -0.0041-5e-3 -0.0047-0.1018-0.1018-5e-3 -0.0052-4e-3 -0.0052-0.0909-0.11059-5e-3 -0.0057-4e-3 -0.0057-0.0791-0.11937-4e-3 -0.0062-3e-3 -0.0062-0.0667-0.12712-4e-3 -0.0067-3e-3 -0.0067-0.0532-0.13436-2e-3 -0.0057-2e-3 -0.0052-0.0212-0.06976-2e-3 -0.0062-0.0181-0.07131-1e-3 -0.0041-5.2e-4 -0.0041-0.0139-0.07286-1e-3 -0.0041-5.1e-4 -0.0041-0.01-0.07441v-0.0031l-5.2e-4 -0.0036-2e-3 -0.02429h-0.48266z" display="inline" enable-background="new" fill="#ffaaaa" filter="url(#aX)" opacity=".5" style="mix-blend-mode:normal"/>\n </g>\n <g id="Fringe" transform="translate(-7.641 -1.4302)" fill="#0191dc">\n  <g stroke-width=".7028">\n   <path transform="matrix(.38335 0 0 .36971 7.8678 6.886)" d="m173.3 0h-58.1v56.7z"/>\n   <path transform="matrix(.38335 0 0 .36971 7.8678 6.886)" d="m114.4 0h-88.3c-13.8 2.1-25.9 13.3-25.9 27.7v83.9z"/>\n   <path transform="matrix(.38335 0 0 .36971 7.8678 6.886)" d="m202.7 0h-29.5v27.9z"/>\n  </g>\n  <path transform="matrix(.26458 0 0 .26458 7.641 6.886)" d="m79.676 338.72s-42.887 41.221-45.93 44.295h45.93zm-15.504 19.842h4.4922l7.5352 19.982h-5.2168l-0.86914-2.375h-7.3887l-0.86914 2.375h-5.0723zm2.3184 5.7285-2.6074 8.2441h5.0703z"/>\n  <path transform="matrix(.26458 0 0 .26458 7.641 6.886)" d="m647.78 185.57v44.436l45.93-44.436zm4.2012 4.1914h8.5488c5.6506 0 6.8106 3.3532 6.8106 5.4492 0 2.5152-2.0293 4.0515-3.623 4.4707 1.304 0 3.7676 1.5372 3.7676 4.6113 0 2.096-1.16 5.5898-6.8105 5.5898h-8.6934zm4.7812 3.4922v4.752h2.8984c2.3182 0 2.8984-1.3969 2.8984-2.375 0-0.83842-0.43536-2.377-2.8984-2.377zm0 7.9648v5.0312h3.043c2.3182 0 2.8984-1.3977 2.8984-2.5156 0-0.97814-0.58022-2.5156-2.8984-2.5156z"/>\n </g>\n <g id="LEDsOn" transform="translate(1.168e-6 5.4558)">\n  <use transform="translate(6.6465 9.5182)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n  <use transform="translate(6.6465 23.909)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n  <use transform="translate(6.6465 38.299)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n  <use transform="translate(6.6465 52.69)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n  <use transform="translate(6.6465 67.081)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n  <use transform="translate(21.6 9.5182)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n  <use transform="translate(21.6 23.909)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n  <use transform="translate(21.6 38.299)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n  <use transform="translate(21.6 52.69)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n  <use transform="translate(21.6 67.081)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n  <use transform="translate(36.553 9.5182)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n  <use transform="translate(36.553 23.909)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n  <use transform="translate(36.553 38.299)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n  <use transform="translate(36.553 52.69)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n  <use transform="translate(36.553 67.081)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n  <use transform="translate(51.507 9.5182)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n  <use transform="translate(51.507 23.909)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n  <use transform="translate(51.507 38.299)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n  <use transform="translate(51.507 52.69)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n  <use transform="translate(51.507 67.081)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n  <use transform="translate(66.46 9.5182)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n  <use transform="translate(66.46 23.909)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n  <use transform="translate(66.46 38.299)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n  <use transform="translate(66.46 52.69)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n  <use transform="translate(66.46 67.081)" width="100%" height="100%" display="none" xlink:href="#aZ"/>\n </g>\n</svg>\n';

  // board/conversions.ts
  var conversions_exports = {};
  __export(conversions_exports, {
    convertAccelerometerNumberToString: () => convertAccelerometerNumberToString,
    convertAccelerometerStringToNumber: () => convertAccelerometerStringToNumber,
    convertAudioBuffer: () => convertAudioBuffer,
    convertSoundThresholdNumberToString: () => convertSoundThresholdNumberToString
  });

  // board/constants.ts
  var MICROBIT_HAL_DEVICE_OK = 0;
  var MICROBIT_HAL_DEVICE_NO_RESOURCES = -1;
  var MICROBIT_HAL_PIN_P0 = 0;
  var MICROBIT_HAL_PIN_P1 = 1;
  var MICROBIT_HAL_PIN_P2 = 2;
  var MICROBIT_HAL_PIN_P3 = 3;
  var MICROBIT_HAL_PIN_P4 = 4;
  var MICROBIT_HAL_PIN_P5 = 5;
  var MICROBIT_HAL_PIN_P6 = 6;
  var MICROBIT_HAL_PIN_P7 = 7;
  var MICROBIT_HAL_PIN_P8 = 8;
  var MICROBIT_HAL_PIN_P9 = 9;
  var MICROBIT_HAL_PIN_P10 = 10;
  var MICROBIT_HAL_PIN_P11 = 11;
  var MICROBIT_HAL_PIN_P12 = 12;
  var MICROBIT_HAL_PIN_P13 = 13;
  var MICROBIT_HAL_PIN_P14 = 14;
  var MICROBIT_HAL_PIN_P15 = 15;
  var MICROBIT_HAL_PIN_P16 = 16;
  var MICROBIT_HAL_PIN_P19 = 17;
  var MICROBIT_HAL_PIN_P20 = 18;
  var MICROBIT_HAL_PIN_FACE = 19;
  var MICROBIT_HAL_ACCELEROMETER_EVT_NONE = 0;
  var MICROBIT_HAL_ACCELEROMETER_EVT_TILT_UP = 1;
  var MICROBIT_HAL_ACCELEROMETER_EVT_TILT_DOWN = 2;
  var MICROBIT_HAL_ACCELEROMETER_EVT_TILT_LEFT = 3;
  var MICROBIT_HAL_ACCELEROMETER_EVT_TILT_RIGHT = 4;
  var MICROBIT_HAL_ACCELEROMETER_EVT_FACE_UP = 5;
  var MICROBIT_HAL_ACCELEROMETER_EVT_FACE_DOWN = 6;
  var MICROBIT_HAL_ACCELEROMETER_EVT_FREEFALL = 7;
  var MICROBIT_HAL_ACCELEROMETER_EVT_3G = 8;
  var MICROBIT_HAL_ACCELEROMETER_EVT_6G = 9;
  var MICROBIT_HAL_ACCELEROMETER_EVT_8G = 10;
  var MICROBIT_HAL_ACCELEROMETER_EVT_SHAKE = 11;
  var MICROBIT_HAL_ACCELEROMETER_EVT_2G = 12;
  var MICROBIT_HAL_MICROPHONE_EVT_THRESHOLD_LOW = 1;
  var MICROBIT_HAL_MICROPHONE_EVT_THRESHOLD_HIGH = 2;
  var MICROBIT_HAL_MICROPHONE_SET_THRESHOLD_LOW = 0;
  var MICROBIT_HAL_MICROPHONE_SET_THRESHOLD_HIGH = 1;
  var MICROBIT_HAL_LOG_TIMESTAMP_NONE = 0;
  var MICROBIT_HAL_LOG_TIMESTAMP_MILLISECONDS = 1;
  var MICROBIT_HAL_LOG_TIMESTAMP_SECONDS = 10;
  var MICROBIT_HAL_LOG_TIMESTAMP_MINUTES = 600;
  var MICROBIT_HAL_LOG_TIMESTAMP_HOURS = 36e3;
  var MICROBIT_HAL_LOG_TIMESTAMP_DAYS = 864e3;

  // board/conversions.ts
  function convertSoundThresholdNumberToString(value) {
    switch (value) {
      case MICROBIT_HAL_MICROPHONE_SET_THRESHOLD_LOW:
        return "low";
      case MICROBIT_HAL_MICROPHONE_SET_THRESHOLD_HIGH:
        return "high";
      default:
        throw new Error(`Invalid value ${value}`);
    }
  }
  function convertAccelerometerStringToNumber(value) {
    switch (value) {
      case "none":
        return MICROBIT_HAL_ACCELEROMETER_EVT_NONE;
      case "up":
        return MICROBIT_HAL_ACCELEROMETER_EVT_TILT_UP;
      case "down":
        return MICROBIT_HAL_ACCELEROMETER_EVT_TILT_DOWN;
      case "left":
        return MICROBIT_HAL_ACCELEROMETER_EVT_TILT_LEFT;
      case "right":
        return MICROBIT_HAL_ACCELEROMETER_EVT_TILT_RIGHT;
      case "face up":
        return MICROBIT_HAL_ACCELEROMETER_EVT_FACE_UP;
      case "face down":
        return MICROBIT_HAL_ACCELEROMETER_EVT_FACE_DOWN;
      case "freefall":
        return MICROBIT_HAL_ACCELEROMETER_EVT_FREEFALL;
      case "2g":
        return MICROBIT_HAL_ACCELEROMETER_EVT_2G;
      case "3g":
        return MICROBIT_HAL_ACCELEROMETER_EVT_3G;
      case "6g":
        return MICROBIT_HAL_ACCELEROMETER_EVT_6G;
      case "8g":
        return MICROBIT_HAL_ACCELEROMETER_EVT_8G;
      case "shake":
        return MICROBIT_HAL_ACCELEROMETER_EVT_SHAKE;
      default:
        throw new Error(`Invalid value ${value}`);
    }
  }
  function convertAccelerometerNumberToString(value) {
    switch (value) {
      case MICROBIT_HAL_ACCELEROMETER_EVT_NONE:
        return "none";
      case MICROBIT_HAL_ACCELEROMETER_EVT_TILT_UP:
        return "up";
      case MICROBIT_HAL_ACCELEROMETER_EVT_TILT_DOWN:
        return "down";
      case MICROBIT_HAL_ACCELEROMETER_EVT_TILT_LEFT:
        return "left";
      case MICROBIT_HAL_ACCELEROMETER_EVT_TILT_RIGHT:
        return "right";
      case MICROBIT_HAL_ACCELEROMETER_EVT_FACE_UP:
        return "face up";
      case MICROBIT_HAL_ACCELEROMETER_EVT_FACE_DOWN:
        return "face down";
      case MICROBIT_HAL_ACCELEROMETER_EVT_FREEFALL:
        return "freefall";
      case MICROBIT_HAL_ACCELEROMETER_EVT_2G:
        return "2g";
      case MICROBIT_HAL_ACCELEROMETER_EVT_3G:
        return "3g";
      case MICROBIT_HAL_ACCELEROMETER_EVT_6G:
        return "6g";
      case MICROBIT_HAL_ACCELEROMETER_EVT_8G:
        return "8g";
      case MICROBIT_HAL_ACCELEROMETER_EVT_SHAKE:
        return "shake";
      default:
        throw new Error(`Invalid value ${value}`);
    }
  }
  var convertAudioBuffer = (heap, source, target) => {
    const channel = target.getChannelData(0);
    for (let i = 0; i < channel.length; ++i) {
      channel[i] = heap[source + i] / 255 * 2 - 1;
    }
    return target;
  };

  // board/state.ts
  var Sensor = class {
    constructor(type, id) {
      this.type = type;
      this.id = id;
    }
    valueError(value) {
      return new Error(`${this.id} given invalid value: ${JSON.stringify(value)}`);
    }
  };
  var RangeSensor = class extends Sensor {
    constructor(id, min, max, initial, unit, lowThreshold, highThreshold) {
      super("range", id);
      this.min = min;
      this.max = max;
      this.unit = unit;
      this.lowThreshold = lowThreshold;
      this.highThreshold = highThreshold;
      this.value = initial;
    }
    setValue(value) {
      let proposed;
      if (typeof value === "number") {
        proposed = value;
      } else if (typeof value === "string") {
        try {
          proposed = parseInt(value, 10);
        } catch (e) {
          throw this.valueError(value);
        }
      } else {
        throw this.valueError(value);
      }
      if (proposed > this.max || proposed < this.min) {
        throw this.valueError(value);
      }
      this.value = proposed;
    }
  };
  var EnumSensor = class extends Sensor {
    constructor(id, choices, initial) {
      super("enum", id);
      this.choices = choices;
      this.id = id;
      this.choices = choices;
      this.value = initial;
    }
    setValue(value) {
      if (typeof value !== "string" || !this.choices.includes(value)) {
        throw this.valueError(value);
      }
      this.value = value;
    }
  };

  // board/util.ts
  function clamp(value, min, max) {
    if (value < min) {
      return min;
    }
    if (value > max) {
      return max;
    }
    return value;
  }

  // board/accelerometer.ts
  var Accelerometer = class {
    constructor(onChange) {
      this.onChange = onChange;
      const min = -2e3;
      const max = 2e3;
      this.state = {
        accelerometerX: new RangeSensor("accelerometerX", min, max, 0, "mg"),
        accelerometerY: new RangeSensor("accelerometerY", min, max, 0, "mg"),
        accelerometerZ: new RangeSensor("accelerometerZ", min, max, 0, "mg"),
        gesture: new EnumSensor("gesture", [
          "none",
          "up",
          "down",
          "left",
          "right",
          "face up",
          "face down",
          "freefall",
          "3g",
          "6g",
          "8g",
          "shake"
        ], "none")
      };
    }
    setValue(id, value) {
      this.state[id].setValue(value);
      if (id === "gesture" && this.gestureCallback) {
        this.gestureCallback(convertAccelerometerStringToNumber(this.state.gesture.value));
      }
    }
    setRange(range) {
      const min = -1e3 * range;
      const max = 1e3 * range;
      const { accelerometerX, accelerometerY, accelerometerZ } = this.state;
      for (const sensor of [accelerometerX, accelerometerY, accelerometerZ]) {
        sensor.value = clamp(sensor.value, min, max);
        sensor.min = min;
        sensor.max = max;
      }
      this.onChange({
        accelerometerX,
        accelerometerY,
        accelerometerZ
      });
    }
    initializeCallbacks(gestureCallback) {
      this.gestureCallback = gestureCallback;
    }
    boardStopped() {
    }
  };

  // board/audio/built-in-sounds.ts
  function replaceBuiltinSound(expression) {
    switch (expression) {
      case "giggle":
        return "010230988019008440044008881023001601003300240000000000000000000000000000,110232570087411440044008880352005901003300010000000000000000010000000000,310232729021105440288908880091006300000000240700020000000000003000000000,310232729010205440288908880091006300000000240700020000000000003000000000,310232729011405440288908880091006300000000240700020000000000003000000000";
      case "happy":
        return "010231992066911440044008880262002800001800020500000000000000010000000000,002322129029508440240408880000000400022400110000000000000000007500000000,000002129029509440240408880145000400022400110000000000000000007500000000";
      case "hello":
        return "310230673019702440118708881023012800000000240000000000000000000000000000,300001064001602440098108880000012800000100040000000000000000000000000000,310231064029302440098108881023012800000100040000000000000000000000000000";
      case "mysterious":
        return "400002390033100440240408880477000400022400110400000000000000008000000000,405512845385000440044008880000012803010500160000000000000000085000500015";
      case "sad":
        return "310232226070801440162408881023012800000100240000000000000000000000000000,310231623093602440093908880000012800000100240000000000000000000000000000";
      case "slide":
        return "105202325022302440240408881023012801020000110400000000000000010000000000,010232520091002440044008881023012801022400110400000000000000010000000000";
      case "soaring":
        return "210234009530905440599908881023002202000400020250000000000000020000000000,402233727273014440044008880000003101024400030000000000000000000000000000";
      case "spring":
        return "306590037116312440058708880807003400000000240000000000000000050000000000,010230037116313440058708881023003100000000240000000000000000050000000000";
      case "twinkle":
        return "010180007672209440075608880855012800000000240000000000000000000000000000";
      case "yawn":
        return "200002281133202440150008881023012801024100240400030000000000010000000000,005312520091002440044008880636012801022400110300000000000000010000000000,008220784019008440044008880681001600005500240000000000000000005000000000,004790784019008440044008880298001600000000240000000000000000005000000000,003210784019008440044008880108001600003300080000000000000000005000000000";
      default:
        return expression;
    }
  }

  // board/audio/sound-emoji-synthesizer.ts
  var EMOJI_SYNTHESIZER_SAMPLE_RATE = 44100;
  var EMOJI_SYNTHESIZER_TONE_WIDTH_F = 1024;
  var EMOJI_SYNTHESIZER_BUFFER_SIZE = 512;
  var EMOJI_SYNTHESIZER_TONE_EFFECTS = 3;
  var EMOJI_SYNTHESIZER_STATUS_OUTPUT_SILENCE_AS_EMPTY = 2;
  var EMOJI_SYNTHESIZER_STATUS_STOPPING = 4;
  var SoundEmojiSynthesizer = class {
    constructor(id, onDone, sampleRate = EMOJI_SYNTHESIZER_SAMPLE_RATE) {
      this.onDone = onDone;
      this.buffer = [];
      this.samplesPerStep = [];
      this.frequency = -1;
      this.status = 0;
      this.effectPointer = -1;
      this.effectBuffer = [];
      this.position = 0;
      this.bufferSize = EMOJI_SYNTHESIZER_BUFFER_SIZE;
      this.sampleRate = sampleRate;
      this.samplesToWrite = 0;
      this.samplesWritten = 0;
      this.sampleRange = 1023;
      this.orMask = 0;
      this.effectPointer = -1;
      this.volume = 1;
    }
    get effect() {
      return this.effectBuffer[this.effectPointer];
    }
    play(sound) {
      this.effectBuffer = sound;
      this.effectPointer = -1;
      this.nextSoundEffect();
    }
    nextSoundEffect() {
      const hadEffect = this.effect != null;
      if (this.status & EMOJI_SYNTHESIZER_STATUS_STOPPING) {
        this.effectPointer = -1;
        this.effectBuffer = [];
      }
      if (this.effect)
        this.effectPointer++;
      else
        this.effectPointer = 0;
      if (this.effectPointer >= this.effectBuffer.length) {
        this.effectPointer = 0;
        if (this.effect.duration >= 0) {
          this.effectPointer = -1;
          this.effectBuffer = [];
          this.samplesWritten = 0;
          this.samplesToWrite = 0;
          this.position = 0;
          return hadEffect;
        }
      }
      this.samplesToWrite = this.determineSampleCount(this.effect.duration);
      this.frequency = this.effect.frequency;
      this.volume = this.effect.volume;
      this.samplesWritten = 0;
      for (let i = 0; i < EMOJI_SYNTHESIZER_TONE_EFFECTS; i++) {
        this.effect.effects[i].step = 0;
        this.effect.effects[i].steps = Math.max(this.effect.effects[i].steps, 1);
        this.samplesPerStep[i] = Math.floor(this.samplesToWrite / this.effect.effects[i].steps);
      }
      return false;
    }
    pull() {
      let done = false;
      let sample = null;
      let bufferEnd = -1;
      while (!done) {
        if (this.samplesWritten == this.samplesToWrite || this.status & EMOJI_SYNTHESIZER_STATUS_STOPPING) {
          let renderComplete = this.nextSoundEffect();
          if (this.samplesToWrite == 0 || this.status & EMOJI_SYNTHESIZER_STATUS_STOPPING) {
            done = true;
            if (renderComplete || this.status & EMOJI_SYNTHESIZER_STATUS_STOPPING) {
              this.status &= ~EMOJI_SYNTHESIZER_STATUS_STOPPING;
              this.onDone();
            }
          }
        }
        if ((this.samplesWritten < this.samplesToWrite || !(this.status & EMOJI_SYNTHESIZER_STATUS_OUTPUT_SILENCE_AS_EMPTY)) && sample == null) {
          this.buffer = new Array(this.bufferSize);
          sample = 0;
          bufferEnd = this.buffer.length;
        }
        while (this.samplesWritten < this.samplesToWrite) {
          let skip = EMOJI_SYNTHESIZER_TONE_WIDTH_F * this.frequency / this.sampleRate;
          let gain = this.sampleRange * this.volume / 1024;
          let offset = 512 - 512 * gain;
          let effectStepEnd = [];
          for (let i = 0; i < EMOJI_SYNTHESIZER_TONE_EFFECTS; i++) {
            effectStepEnd[i] = this.samplesPerStep[i] * this.effect.effects[i].step;
            if (this.effect.effects[i].step == this.effect.effects[i].steps - 1)
              effectStepEnd[i] = this.samplesToWrite;
          }
          let stepEndPosition = effectStepEnd[0];
          for (let i = 1; i < EMOJI_SYNTHESIZER_TONE_EFFECTS; i++)
            stepEndPosition = Math.min(stepEndPosition, effectStepEnd[i]);
          while (this.samplesWritten < stepEndPosition) {
            if (sample == bufferEnd) {
              return this.buffer;
            }
            let s = this.effect.tone.tonePrint(this.effect.tone.parameter, Math.max(this.position, 0));
            this.buffer[sample] = s * gain + offset;
            sample++;
            this.samplesWritten++;
            this.position += skip;
            while (this.position > EMOJI_SYNTHESIZER_TONE_WIDTH_F)
              this.position -= EMOJI_SYNTHESIZER_TONE_WIDTH_F;
          }
          for (let i = 0; i < EMOJI_SYNTHESIZER_TONE_EFFECTS; i++) {
            if (this.samplesWritten == effectStepEnd[i]) {
              if (this.effect.effects[i].step < this.effect.effects[i].steps) {
                if (!this.effect.effects[i].effect) {
                  throw new Error("Can this really be null/undefined?");
                }
                this.effect.effects[i].effect(this, this.effect.effects[i]);
                this.effect.effects[i].step++;
              }
            }
          }
        }
      }
      if (sample == null) {
        this.buffer = [];
      } else {
        const silence = this.sampleRange * 0.5;
        while (sample < bufferEnd) {
          this.buffer[sample] = silence;
          sample++;
        }
      }
      return this.buffer;
    }
    determineSampleCount(playoutTime) {
      if (playoutTime < 0)
        playoutTime = -playoutTime;
      const seconds = playoutTime / 1e3;
      return Math.floor(this.sampleRate * seconds);
    }
    totalDuration() {
      let duration = 0;
      for (const effect of this.effectBuffer)
        duration += effect.duration;
      return duration;
    }
  };

  // board/audio/musical-progressions.ts
  var chromaticInterval = [
    1,
    1.0417,
    1.125,
    1.2,
    1.25,
    1.3333,
    1.4063,
    1.5,
    1.6,
    1.6667,
    1.8,
    1.875
  ];
  var majorScaleInterval = [
    chromaticInterval[0],
    chromaticInterval[2],
    chromaticInterval[4],
    chromaticInterval[5],
    chromaticInterval[7],
    chromaticInterval[9],
    chromaticInterval[11]
  ];
  var minorScaleInterval = [
    chromaticInterval[0],
    chromaticInterval[2],
    chromaticInterval[3],
    chromaticInterval[5],
    chromaticInterval[7],
    chromaticInterval[8],
    chromaticInterval[10]
  ];
  var pentatonicScaleInterval = [
    chromaticInterval[0],
    chromaticInterval[2],
    chromaticInterval[4],
    chromaticInterval[7],
    chromaticInterval[9]
  ];
  var majorTriadInterval = [
    chromaticInterval[0],
    chromaticInterval[4],
    chromaticInterval[7]
  ];
  var minorTriadInterval = [
    chromaticInterval[0],
    chromaticInterval[3],
    chromaticInterval[7]
  ];
  var diminishedInterval = [
    chromaticInterval[0],
    chromaticInterval[3],
    chromaticInterval[6],
    chromaticInterval[9]
  ];
  var wholeToneInterval = [
    chromaticInterval[0],
    chromaticInterval[2],
    chromaticInterval[4],
    chromaticInterval[6],
    chromaticInterval[8],
    chromaticInterval[10]
  ];
  var chromatic = {
    interval: chromaticInterval,
    length: 12
  };
  var majorScale = {
    interval: majorScaleInterval,
    length: 7
  };
  var minorScale = {
    interval: minorScaleInterval,
    length: 7
  };
  var diminished = {
    interval: diminishedInterval,
    length: 4
  };
  var wholeTone = {
    interval: wholeToneInterval,
    length: 6
  };
  function calculateFrequencyFromProgression(root, progression, offset) {
    let octave = Math.floor(offset / progression.length);
    let index = offset % progression.length;
    return root * Math.pow(2, octave) * progression.interval[index];
  }

  // board/audio/sound-synthesizer-effects.ts
  function noInterpolation(synth, context) {
  }
  function linearInterpolation(synth, context) {
    let interval = (context.parameter[0] - synth.effect.frequency) / context.steps;
    synth.frequency = synth.effect.frequency + interval * context.step;
  }
  function logarithmicInterpolation(synth, context) {
    synth.frequency = synth.effect.frequency + Math.log10(Math.max(context.step, 0.1)) * (context.parameter[0] - synth.effect.frequency) / 1.95;
  }
  function curveInterpolation(synth, context) {
    synth.frequency = Math.sin(context.step * 3.12159 / 180) * (context.parameter[0] - synth.effect.frequency) + synth.effect.frequency;
  }
  function warbleInterpolation(synth, context) {
    synth.frequency = Math.sin(context.step) * (context.parameter[0] - synth.effect.frequency) + synth.effect.frequency;
  }
  function exponentialRisingInterpolation(synth, context) {
    synth.frequency = synth.effect.frequency + Math.sin(0.01745329 * context.step) * context.parameter[0];
  }
  function exponentialFallingInterpolation(synth, context) {
    synth.frequency = synth.effect.frequency + Math.cos(0.01745329 * context.step) * context.parameter[0];
  }
  function appregrioAscending(synth, context) {
    synth.frequency = calculateFrequencyFromProgression(synth.effect.frequency, context.parameter_p[0], context.step);
  }
  function appregrioDescending(synth, context) {
    synth.frequency = calculateFrequencyFromProgression(synth.effect.frequency, context.parameter_p[0], context.steps - context.step - 1);
  }
  function frequencyVibratoEffect(synth, context) {
    if (context.step == 0)
      return;
    if (context.step % 2 == 0)
      synth.frequency /= context.parameter[0];
    else
      synth.frequency *= context.parameter[0];
  }
  function volumeVibratoEffect(synth, context) {
    if (context.step == 0)
      return;
    if (context.step % 2 == 0)
      synth.volume /= context.parameter[0];
    else
      synth.volume *= context.parameter[0];
  }
  function volumeRampEffect(synth, context) {
    let delta = (context.parameter[0] - synth.effect.volume) / context.steps;
    synth.volume = synth.effect.volume + context.step * delta;
  }

  // board/audio/sound-synthesizer.ts
  var sineTone = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    3,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    11,
    11,
    12,
    13,
    13,
    14,
    15,
    16,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    40,
    41,
    42,
    43,
    45,
    46,
    47,
    49,
    50,
    51,
    53,
    54,
    56,
    57,
    58,
    60,
    61,
    63,
    64,
    66,
    68,
    69,
    71,
    72,
    74,
    76,
    77,
    79,
    81,
    82,
    84,
    86,
    87,
    89,
    91,
    93,
    95,
    96,
    98,
    100,
    102,
    104,
    106,
    108,
    110,
    112,
    114,
    116,
    118,
    120,
    122,
    124,
    126,
    128,
    130,
    132,
    134,
    136,
    138,
    141,
    143,
    145,
    147,
    149,
    152,
    154,
    156,
    158,
    161,
    163,
    165,
    167,
    170,
    172,
    175,
    177,
    179,
    182,
    184,
    187,
    189,
    191,
    194,
    196,
    199,
    201,
    204,
    206,
    209,
    211,
    214,
    216,
    219,
    222,
    224,
    227,
    229,
    232,
    235,
    237,
    240,
    243,
    245,
    248,
    251,
    253,
    256,
    259,
    262,
    264,
    267,
    270,
    273,
    275,
    278,
    281,
    284,
    287,
    289,
    292,
    295,
    298,
    301,
    304,
    307,
    309,
    312,
    315,
    318,
    321,
    324,
    327,
    330,
    333,
    336,
    339,
    342,
    345,
    348,
    351,
    354,
    357,
    360,
    363,
    366,
    369,
    372,
    375,
    378,
    381,
    384,
    387,
    390,
    393,
    396,
    399,
    402,
    405,
    408,
    411,
    414,
    417,
    420,
    424,
    427,
    430,
    433,
    436,
    439,
    442,
    445,
    448,
    452,
    455,
    458,
    461,
    464,
    467,
    470,
    473,
    477,
    480,
    483,
    486,
    489,
    492,
    495,
    498,
    502,
    505,
    508,
    511,
    514,
    517,
    520,
    524,
    527,
    530,
    533,
    536,
    539,
    542,
    545,
    549,
    552,
    555,
    558,
    561,
    564,
    567,
    570,
    574,
    577,
    580,
    583,
    586,
    589,
    592,
    595,
    598,
    602,
    605,
    608,
    611,
    614,
    617,
    620,
    623,
    626,
    629,
    632,
    635,
    638,
    641,
    644,
    647,
    650,
    653,
    656,
    659,
    662,
    665,
    668,
    671,
    674,
    677,
    680,
    683,
    686,
    689,
    692,
    695,
    698,
    701,
    704,
    707,
    710,
    713,
    715,
    718,
    721,
    724,
    727,
    730,
    733,
    735,
    738,
    741,
    744,
    747,
    749,
    752,
    755,
    758,
    760,
    763,
    766,
    769,
    771,
    774,
    777,
    779,
    782,
    785,
    787,
    790,
    793,
    795,
    798,
    800,
    803,
    806,
    808,
    811,
    813,
    816,
    818,
    821,
    823,
    826,
    828,
    831,
    833,
    835,
    838,
    840,
    843,
    845,
    847,
    850,
    852,
    855,
    857,
    859,
    861,
    864,
    866,
    868,
    870,
    873,
    875,
    877,
    879,
    881,
    884,
    886,
    888,
    890,
    892,
    894,
    896,
    898,
    900,
    902,
    904,
    906,
    908,
    910,
    912,
    914,
    916,
    918,
    920,
    922,
    924,
    926,
    927,
    929,
    931,
    933,
    935,
    936,
    938,
    940,
    941,
    943,
    945,
    946,
    948,
    950,
    951,
    953,
    954,
    956,
    958,
    959,
    961,
    962,
    964,
    965,
    966,
    968,
    969,
    971,
    972,
    973,
    975,
    976,
    977,
    979,
    980,
    981,
    982,
    984,
    985,
    986,
    987,
    988,
    989,
    990,
    992,
    993,
    994,
    995,
    996,
    997,
    998,
    999,
    1e3,
    1e3,
    1001,
    1002,
    1003,
    1004,
    1005,
    1006,
    1006,
    1007,
    1008,
    1009,
    1009,
    1010,
    1011,
    1011,
    1012,
    1013,
    1013,
    1014,
    1014,
    1015,
    1015,
    1016,
    1016,
    1017,
    1017,
    1018,
    1018,
    1019,
    1019,
    1019,
    1020,
    1020,
    1020,
    1021,
    1021,
    1021,
    1021,
    1022,
    1022,
    1022,
    1022,
    1022,
    1022,
    1022,
    1022,
    1022,
    1022,
    1023,
    1022
  ];
  var TONE_WIDTH = 1024;
  function SineTone(arg, position) {
    position |= 0;
    let off = TONE_WIDTH - position;
    if (off < TONE_WIDTH / 2)
      position = off;
    return sineTone[position];
  }
  function SawtoothTone(arg, position) {
    return position;
  }
  function TriangleTone(arg, position) {
    return position < 512 ? position * 2 : (1023 - position) * 2;
  }
  function NoiseTone(arg, position) {
    let mult = arg[0];
    if (mult == 0)
      mult = 7919;
    return position * mult & 1023;
  }
  function SquareWaveTone(arg, position) {
    return position < 512 ? 1023 : 0;
  }

  // board/audio/sound-expressions.ts
  function parseSoundEffects(notes) {
    const charsPerEffect = 72;
    const effectCount = Math.floor((notes.length + 1) / (charsPerEffect + 1));
    const expectedLength = effectCount * (charsPerEffect + 1) - 1;
    if (notes.length != expectedLength) {
      return [];
    }
    const soundEffects = [];
    for (let i = 0; i < effectCount; ++i) {
      const start = i * charsPerEffect + i;
      if (start > 0 && notes[start - 1] != ",") {
        return [];
      }
      const effect = blankSoundEffect();
      if (!parseSoundExpression(notes.substr(start), effect)) {
        return [];
      }
      soundEffects.push(effect);
    }
    return soundEffects;
  }
  function parseSoundExpression(soundChars, fx) {
    let wave = parseInt(soundChars.substr(0, 1));
    let effectVolume = parseInt(soundChars.substr(1, 4));
    let frequency = parseInt(soundChars.substr(5, 4));
    let duration = parseInt(soundChars.substr(9, 4));
    let shape = parseInt(soundChars.substr(13, 2));
    let endFrequency = parseInt(soundChars.substr(18, 4));
    let endVolume = parseInt(soundChars.substr(26, 4));
    let steps = parseInt(soundChars.substr(30, 4));
    let fxChoice = parseInt(soundChars.substr(34, 2));
    let fxParam = parseInt(soundChars.substr(36, 4));
    let fxnSteps = parseInt(soundChars.substr(40, 4));
    frequency = applyRandom(frequency, parseInt(soundChars.substr(44, 4)));
    endFrequency = applyRandom(endFrequency, parseInt(soundChars.substr(48, 4)));
    effectVolume = applyRandom(effectVolume, parseInt(soundChars.substr(52, 4)));
    endVolume = applyRandom(endVolume, parseInt(soundChars.substr(56, 4)));
    duration = applyRandom(duration, parseInt(soundChars.substr(60, 4)));
    fxParam = applyRandom(fxParam, parseInt(soundChars.substr(64, 4)));
    fxnSteps = applyRandom(fxnSteps, parseInt(soundChars.substr(68, 4)));
    if (frequency == -1 || endFrequency == -1 || effectVolume == -1 || endVolume == -1 || duration == -1 || fxParam == -1 || fxnSteps == -1) {
      return false;
    }
    let volumeScaleFactor = 1;
    switch (wave) {
      case 0:
        fx.tone.tonePrint = SineTone;
        break;
      case 1:
        fx.tone.tonePrint = SawtoothTone;
        break;
      case 2:
        fx.tone.tonePrint = TriangleTone;
        break;
      case 3:
        fx.tone.tonePrint = SquareWaveTone;
        break;
      case 4:
        fx.tone.tonePrint = NoiseTone;
        break;
    }
    fx.frequency = frequency;
    fx.duration = duration;
    fx.effects[0].steps = steps;
    switch (shape) {
      case 0:
        fx.effects[0].effect = noInterpolation;
        break;
      case 1:
        fx.effects[0].effect = linearInterpolation;
        fx.effects[0].parameter[0] = endFrequency;
        break;
      case 2:
        fx.effects[0].effect = curveInterpolation;
        fx.effects[0].parameter[0] = endFrequency;
        break;
      case 5:
        fx.effects[0].effect = exponentialRisingInterpolation;
        fx.effects[0].parameter[0] = endFrequency;
        break;
      case 6:
        fx.effects[0].effect = exponentialFallingInterpolation;
        fx.effects[0].parameter[0] = endFrequency;
        break;
      case 8:
      case 10:
      case 12:
      case 14:
      case 16:
        fx.effects[0].effect = appregrioAscending;
        break;
      case 9:
      case 11:
      case 13:
      case 15:
      case 17:
        fx.effects[0].effect = appregrioDescending;
        break;
      case 18:
        fx.effects[0].effect = logarithmicInterpolation;
        fx.effects[0].parameter[0] = endFrequency;
        break;
    }
    switch (shape) {
      case 8:
      case 9:
        fx.effects[0].parameter_p[0] = majorScale;
        break;
      case 10:
      case 11:
        fx.effects[0].parameter_p[0] = minorScale;
        break;
      case 12:
      case 13:
        fx.effects[0].parameter_p[0] = diminished;
        break;
      case 14:
      case 15:
        fx.effects[0].parameter_p[0] = chromatic;
        break;
      case 16:
      case 17:
        fx.effects[0].parameter_p[0] = wholeTone;
        break;
    }
    let effectVolumeFloat = CLAMP(0, effectVolume, 1023) / 1023;
    let endVolumeFloat = CLAMP(0, endVolume, 1023) / 1023;
    fx.volume = volumeScaleFactor * effectVolumeFloat;
    fx.effects[1].effect = volumeRampEffect;
    fx.effects[1].steps = 36;
    fx.effects[1].parameter[0] = volumeScaleFactor * endVolumeFloat;
    let normalizedFxnSteps = Math.round(fx.duration / 1e4 * fxnSteps);
    switch (fxChoice) {
      case 1:
        fx.effects[2].steps = normalizedFxnSteps;
        fx.effects[2].effect = frequencyVibratoEffect;
        fx.effects[2].parameter[0] = fxParam;
        break;
      case 2:
        fx.effects[2].steps = normalizedFxnSteps;
        fx.effects[2].effect = volumeVibratoEffect;
        fx.effects[2].parameter[0] = fxParam;
        break;
      case 3:
        fx.effects[2].steps = normalizedFxnSteps;
        fx.effects[2].effect = warbleInterpolation;
        fx.effects[2].parameter[0] = fxParam;
        break;
    }
    return true;
  }
  function random(max) {
    return Math.floor(Math.random() * max);
  }
  function CLAMP(min, value, max) {
    return Math.min(max, Math.max(min, value));
  }
  function applyRandom(value, rand) {
    if (value < 0 || rand < 0) {
      return -1;
    }
    const delta = random(rand * 2 + 1) - rand;
    return Math.abs(value + delta);
  }
  function blankSoundEffect() {
    const res = {
      frequency: 0,
      volume: 1,
      duration: 0,
      tone: {
        tonePrint: SineTone,
        parameter: [0]
      },
      effects: []
    };
    for (let i = 0; i < EMOJI_SYNTHESIZER_TONE_EFFECTS; i++) {
      res.effects.push({
        effect: noInterpolation,
        step: 0,
        steps: 0,
        parameter: [],
        parameter_p: []
      });
    }
    return res;
  }

  // board/audio/index.ts
  var Audio = class {
    constructor() {
      this.frequency = 440;
      this.muted = false;
    }
    initializeCallbacks({
      defaultAudioCallback,
      speechAudioCallback
    }) {
      if (!this.context) {
        throw new Error("Context must be pre-created from a user event");
      }
      this.muteNode = this.context.createGain();
      this.muteNode.gain.setValueAtTime(this.muted ? 0 : 1, this.context.currentTime);
      this.muteNode.connect(this.context.destination);
      this.volumeNode = this.context.createGain();
      this.volumeNode.connect(this.muteNode);
      this.default = new BufferedAudio(this.context, this.volumeNode, defaultAudioCallback);
      this.speech = new BufferedAudio(this.context, this.volumeNode, speechAudioCallback);
      this.soundExpression = new BufferedAudio(this.context, this.volumeNode, () => {
        if (this.currentSoundExpressionCallback) {
          this.currentSoundExpressionCallback();
        }
      });
    }
    async createAudioContextFromUserInteraction() {
      this.context = new AudioContext({
        sampleRate: 44100
      });
      if (this.context.state === "suspended") {
        return this.context.resume();
      }
    }
    playSoundExpression(expr) {
      const soundEffects = parseSoundEffects(replaceBuiltinSound(expr));
      const onDone = () => {
        this.stopSoundExpression();
      };
      const synth = new SoundEmojiSynthesizer(0, onDone);
      synth.play(soundEffects);
      const callback = () => {
        const source = synth.pull();
        const target = new AudioBuffer({
          sampleRate: synth.sampleRate,
          numberOfChannels: 1,
          length: source.length
        });
        const channel = target.getChannelData(0);
        for (let i = 0; i < source.length; i++) {
          channel[i] = (source[i] - 512) / 512;
        }
        this.soundExpression.writeData(target);
      };
      this.currentSoundExpressionCallback = callback;
      callback();
    }
    stopSoundExpression() {
      this.currentSoundExpressionCallback = void 0;
    }
    isSoundExpressionActive() {
      return !!this.currentSoundExpressionCallback;
    }
    mute() {
      this.muted = true;
      if (this.muteNode) {
        this.muteNode.gain.setValueAtTime(0, this.context.currentTime);
      }
    }
    unmute() {
      this.muted = false;
      if (this.muteNode) {
        this.muteNode.gain.setValueAtTime(1, this.context.currentTime);
      }
    }
    setVolume(volume) {
      this.volumeNode.gain.setValueAtTime(volume / 255, this.context.currentTime);
    }
    setPeriodUs(periodUs) {
      this.frequency = periodUs === 0 ? 6068 : 1e6 / periodUs;
      if (this.oscillator) {
        this.oscillator.frequency.value = this.frequency;
      }
    }
    setAmplitudeU10(amplitudeU10) {
      this.stopOscillator();
      if (amplitudeU10) {
        this.oscillator = this.context.createOscillator();
        this.oscillator.type = "sine";
        this.oscillator.connect(this.volumeNode);
        this.oscillator.frequency.value = this.frequency;
        this.oscillator.start();
      }
    }
    boardStopped() {
      var _a, _b, _c;
      this.stopOscillator();
      (_a = this.speech) == null ? void 0 : _a.dispose();
      (_b = this.soundExpression) == null ? void 0 : _b.dispose();
      (_c = this.default) == null ? void 0 : _c.dispose();
    }
    stopOscillator() {
      if (this.oscillator) {
        this.oscillator.stop();
        this.oscillator = void 0;
      }
    }
  };
  var BufferedAudio = class {
    constructor(context, destination, callback) {
      this.context = context;
      this.destination = destination;
      this.callback = callback;
      this.nextStartTime = -1;
      this.sampleRate = -1;
    }
    init(sampleRate) {
      this.sampleRate = sampleRate;
      this.nextStartTime = -1;
    }
    createBuffer(length) {
      return new AudioBuffer({
        sampleRate: this.sampleRate,
        numberOfChannels: 1,
        length
      });
    }
    writeData(buffer) {
      const source = new AudioBufferSourceNode(this.context, {
        buffer
      });
      source.onended = this.callback;
      source.connect(this.destination);
      const currentTime = this.context.currentTime;
      const first = this.nextStartTime < currentTime;
      const startTime = first ? currentTime : this.nextStartTime;
      this.nextStartTime = startTime + buffer.length / buffer.sampleRate;
      if (first) {
        this.callback();
      }
      source.start(startTime);
    }
    dispose() {
      this.callback = () => {
      };
    }
  };

  // board/buttons.ts
  var Button = class {
    constructor(id, element, label, onChange) {
      this.id = id;
      this.element = element;
      this.label = label;
      this.onChange = onChange;
      this._presses = 0;
      this._mouseDown = false;
      this._presses = 0;
      this.state = new RangeSensor(id, 0, 1, 0, void 0);
      this.element.setAttribute("role", "button");
      this.element.setAttribute("tabindex", "0");
      this.element.style.cursor = "pointer";
      this.keyListener = (e) => {
        switch (e.key) {
          case "Enter":
          case " ":
            e.preventDefault();
            if (e.type === "keydown") {
              this.press();
            } else {
              this.release();
            }
        }
      };
      this.mouseDownListener = (e) => {
        e.preventDefault();
        this.mouseDownTouchStartAction();
      };
      this.touchStartListener = (e) => {
        this.mouseDownTouchStartAction();
      };
      this.mouseUpTouchEndListener = (e) => {
        e.preventDefault();
        if (this._mouseDown) {
          this._mouseDown = false;
          this.release();
        }
      };
      this.mouseLeaveListener = (e) => {
        if (this._mouseDown) {
          this._mouseDown = false;
          this.release();
        }
      };
      this.element.addEventListener("mousedown", this.mouseDownListener);
      this.element.addEventListener("touchstart", this.touchStartListener);
      this.element.addEventListener("mouseup", this.mouseUpTouchEndListener);
      this.element.addEventListener("touchend", this.mouseUpTouchEndListener);
      this.element.addEventListener("keydown", this.keyListener);
      this.element.addEventListener("keyup", this.keyListener);
      this.element.addEventListener("mouseleave", this.mouseLeaveListener);
    }
    updateTranslations() {
      this.element.ariaLabel = this.label();
    }
    setValue(value) {
      this.setValueInternal(value, false);
    }
    setValueInternal(value, internalChange) {
      this.state.setValue(value);
      if (value) {
        this._presses++;
      }
      if (internalChange) {
        this.onChange({
          [this.id]: this.state
        });
      }
      this.render();
    }
    mouseDownTouchStartAction() {
      this._mouseDown = true;
      this.press();
    }
    press() {
      this.setValueInternal(this.state.value === this.state.min ? this.state.max : this.state.min, true);
    }
    release() {
      this.setValueInternal(this.state.value === this.state.max ? this.state.min : this.state.max, true);
    }
    isPressed() {
      return !!this.state.value;
    }
    render() {
      const fill = !!this.state.value ? "#00c800" : "#000000";
      this.element.querySelectorAll("circle").forEach((c) => {
        c.style.fill = fill;
      });
    }
    getAndClearPresses() {
      const result = this._presses;
      this._presses = 0;
      return result;
    }
    boardStopped() {
      this._presses = 0;
    }
  };

  // board/compass.ts
  var Compass = class {
    constructor() {
      const min = -2e6;
      const max = 2e6;
      this.state = {
        compassX: new RangeSensor("compassX", min, max, 0, "nT"),
        compassY: new RangeSensor("compassY", min, max, 0, "nT"),
        compassZ: new RangeSensor("compassZ", min, max, 0, "nT"),
        compassHeading: new RangeSensor("compassHeading", 0, 360, 0, "deg")
      };
    }
    setValue(id, value) {
      this.state[id].setValue(value);
    }
    getFieldStrength() {
      const x = this.state.compassX.value;
      const y = this.state.compassY.value;
      const z = this.state.compassZ.value;
      return Math.sqrt(x * x + y * y + z * z);
    }
    boardStopped() {
    }
  };

  // board/data-logging.ts
  var maxSizeBytes = 118780;
  var DataLogging = class {
    constructor(currentTimeMillis, onLogOutput, onSerialOutput, onLogDelete, onChange) {
      this.currentTimeMillis = currentTimeMillis;
      this.onLogOutput = onLogOutput;
      this.onSerialOutput = onSerialOutput;
      this.onLogDelete = onLogDelete;
      this.onChange = onChange;
      this.mirroring = false;
      this.size = 0;
      this.timestamp = MICROBIT_HAL_LOG_TIMESTAMP_NONE;
      this.headingsChanged = false;
      this.headings = [];
      this.state = { type: "dataLogging", logFull: false };
    }
    setMirroring(mirroring) {
      this.mirroring = mirroring;
    }
    setTimestamp(timestamp) {
      this.timestamp = timestamp;
    }
    beginRow() {
      this.row = new Array(this.headings.length);
      this.row.fill("");
      return MICROBIT_HAL_DEVICE_OK;
    }
    endRow() {
      if (!this.row) {
        throw noRowError();
      }
      if (this.timestamp !== this.timestampOnLastEndRow && this.timestamp !== MICROBIT_HAL_LOG_TIMESTAMP_NONE) {
        if (this.size === 0) {
          this.headings = [timestampToHeading(this.timestamp), ...this.headings];
          this.row = ["", ...this.row];
        } else {
          this.logData(timestampToHeading(this.timestamp), "");
        }
      }
      const entry = {};
      if (this.headingsChanged) {
        this.headingsChanged = false;
        entry.headings = [...this.headings];
      }
      const validData = this.row.some((x) => (x == null ? void 0 : x.length) > 0);
      if (validData) {
        if (this.timestamp !== MICROBIT_HAL_LOG_TIMESTAMP_NONE) {
          this.logData(timestampToHeading(this.timestamp), formatTimestamp(this.timestamp, this.currentTimeMillis()));
        }
        entry.data = this.row;
      }
      if (entry.data || entry.headings) {
        const entrySize = calculateEntrySize(entry);
        if (this.size + entrySize > maxSizeBytes) {
          if (!this.state.logFull) {
            this.state = {
              ...this.state,
              logFull: true
            };
            this.onChange({
              dataLogging: this.state
            });
          }
          return MICROBIT_HAL_DEVICE_NO_RESOURCES;
        }
        this.size += entrySize;
        this.output(entry);
      }
      this.timestampOnLastEndRow = this.timestamp;
      this.row = void 0;
      return MICROBIT_HAL_DEVICE_OK;
    }
    logData(key, value) {
      if (!this.row) {
        throw noRowError();
      }
      const index = this.headings.indexOf(key);
      if (index === -1) {
        this.headings.push(key);
        this.row.push(value);
        this.headingsChanged = true;
      } else {
        this.row[index] = value;
      }
      return MICROBIT_HAL_DEVICE_OK;
    }
    output(entry) {
      this.onLogOutput(entry);
      if (this.mirroring) {
        if (entry.headings) {
          this.onSerialOutput(entry.headings.join(",") + "\r\n");
        }
        if (entry.data) {
          this.onSerialOutput(entry.data.join(",") + "\r\n");
        }
      }
    }
    initialize() {
    }
    boardStopped() {
      this.resetNonFlashStateExceptTimestamp();
      if (this.size === 0) {
        this.timestamp = MICROBIT_HAL_LOG_TIMESTAMP_NONE;
      }
    }
    delete() {
      this.resetNonFlashStateExceptTimestamp();
      this.headings = [];
      this.timestampOnLastEndRow = void 0;
      this.size = 0;
      if (this.state.logFull) {
        this.state = {
          ...this.state,
          logFull: false
        };
        this.onChange({
          dataLogging: this.state
        });
      }
      this.onLogDelete();
    }
    resetNonFlashStateExceptTimestamp() {
      this.mirroring = false;
      this.headingsChanged = false;
      this.row = void 0;
    }
  };
  function noRowError() {
    return new Error("HAL clients should always start a row");
  }
  function calculateEntrySize(entry) {
    const headings = entry.headings ? entry.headings.reduce((prev, curr) => prev + curr.length + 1, 0) + 1 : 0;
    const data = entry.data ? entry.data.reduce((prev, curr) => prev + curr.length + 1, 0) + 1 : 0;
    return headings + data;
  }
  function timestampToHeading(timestamp) {
    return `Time (${timestampToUnitString(timestamp)})`;
  }
  function timestampToUnitString(timestamp) {
    switch (timestamp) {
      case MICROBIT_HAL_LOG_TIMESTAMP_DAYS:
        return "days";
      case MICROBIT_HAL_LOG_TIMESTAMP_HOURS:
        return "hours";
      case MICROBIT_HAL_LOG_TIMESTAMP_MINUTES:
        return "minutes";
      case MICROBIT_HAL_LOG_TIMESTAMP_SECONDS:
        return "seconds";
      case MICROBIT_HAL_LOG_TIMESTAMP_MILLISECONDS:
        return "milliseconds";
      case MICROBIT_HAL_LOG_TIMESTAMP_NONE:
      default:
        throw new Error("Not valid");
    }
  }
  function formatTimestamp(format, currentTime) {
    if (format === MICROBIT_HAL_LOG_TIMESTAMP_MILLISECONDS) {
      return currentTime.toString();
    }
    return (currentTime / millisInFormat(format)).toFixed(2);
  }
  function millisInFormat(format) {
    switch (format) {
      case MICROBIT_HAL_LOG_TIMESTAMP_MILLISECONDS:
        return 1;
      case MICROBIT_HAL_LOG_TIMESTAMP_SECONDS:
        return 1e3;
      case MICROBIT_HAL_LOG_TIMESTAMP_MINUTES:
        return 1e3 * 60;
      case MICROBIT_HAL_LOG_TIMESTAMP_HOURS:
        return 1e3 * 60 * 60;
      case MICROBIT_HAL_LOG_TIMESTAMP_DAYS:
        return 1e3 * 60 * 60 * 24;
      default:
        throw new Error();
    }
  }

  // board/display.ts
  var brightMap = [0, 20, 40, 60, 80, 120, 160, 190, 220, 255];
  var Display = class {
    constructor(leds) {
      this.leds = leds;
      this.lightLevel = new RangeSensor("lightLevel", 0, 255, 127, void 0);
      this.leds = leds;
      this.state = this.initialState();
    }
    initialState() {
      return [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ];
    }
    show(image) {
      for (let y = 0; y < 5; ++y) {
        for (let x = 0; x < 5; ++x) {
          this.state[x][y] = clamp(image[y][x], 0, 9);
        }
      }
      this.render();
    }
    clear() {
      this.state = this.initialState();
      this.render();
    }
    setPixel(x, y, value) {
      value = clamp(value, 0, 9);
      this.state[x][y] = value;
      this.render();
    }
    getPixel(x, y) {
      return this.state[x][y];
    }
    render() {
      for (let x = 0; x < 5; ++x) {
        for (let y = 0; y < 5; ++y) {
          const on = this.state[x][y];
          const led = this.leds[x * 5 + y];
          if (on) {
            const bright = brightMap[this.state[x][y]];
            led.style.display = "inline";
            led.style.opacity = (bright / 255).toString();
          } else {
            led.style.display = "none";
          }
        }
      }
    }
    boardStopped() {
      this.clear();
    }
  };

  // board/microphone.ts
  var Microphone = class {
    constructor(element, onChange) {
      this.element = element;
      this.onChange = onChange;
      this.soundLevel = new RangeSensor("soundLevel", 0, 255, 0, void 0, 75, 150);
    }
    microphoneOn() {
      this.element.style.display = "unset";
    }
    microphoneOff() {
      this.element.style.display = "none";
    }
    setThreshold(threshold, value) {
      const proposed = value > 255 ? 255 : value < 0 ? 0 : value;
      if (threshold === "low") {
        this.soundLevel.lowThreshold = proposed;
      } else {
        this.soundLevel.highThreshold = proposed;
      }
      this.onChange({
        soundLevel: this.soundLevel
      });
    }
    setValue(value) {
      const prev = this.soundLevel.value;
      const curr = value;
      this.soundLevel.value = value;
      const low = this.soundLevel.lowThreshold;
      const high = this.soundLevel.highThreshold;
      if (this.soundLevelCallback) {
        if (prev > low && curr <= low) {
          this.soundLevelCallback(MICROBIT_HAL_MICROPHONE_EVT_THRESHOLD_LOW);
        } else if (prev < high && curr >= high) {
          this.soundLevelCallback(MICROBIT_HAL_MICROPHONE_EVT_THRESHOLD_HIGH);
        }
      }
    }
    initializeCallbacks(soundLevelCallback) {
      this.soundLevelCallback = soundLevelCallback;
    }
    boardStopped() {
      this.microphoneOff();
    }
  };

  // board/pins.ts
  var initialAnalogPeriodUs = -1;
  var BasePin = class {
    constructor(id) {
      this.analogPeriodUs = initialAnalogPeriodUs;
      this.state = new RangeSensor(id, 0, 1, 0, void 0);
    }
    updateTranslations() {
    }
    setValue(value) {
      this.state.setValue(value);
    }
    setAnalogPeriodUs(period) {
      this.analogPeriodUs = period;
      return 0;
    }
    getAnalogPeriodUs() {
      return this.analogPeriodUs;
    }
    isTouched() {
      return false;
    }
    boardStopped() {
      this.analogPeriodUs = initialAnalogPeriodUs;
    }
  };
  var StubPin = class extends BasePin {
  };
  var TouchPin = class extends BasePin {
    constructor(id, ui, onChange) {
      super(id);
      this.id = id;
      this.ui = ui;
      this.onChange = onChange;
      this._mouseDown = false;
      if (this.ui) {
        const { element, label } = this.ui;
        element.setAttribute("role", "button");
        element.setAttribute("tabindex", "0");
        element.style.cursor = "pointer";
      }
      this.keyListener = (e) => {
        switch (e.key) {
          case "Enter":
          case " ":
            e.preventDefault();
            if (e.type === "keydown") {
              this.press();
            } else {
              this.release();
            }
        }
      };
      this.mouseDownListener = (e) => {
        e.preventDefault();
        this.mouseDownTouchStartAction();
      };
      this.touchStartListener = (e) => {
        this.mouseDownTouchStartAction();
      };
      this.mouseUpTouchEndListener = (e) => {
        e.preventDefault();
        if (this._mouseDown) {
          this._mouseDown = false;
          this.release();
        }
      };
      this.mouseLeaveListener = (e) => {
        if (this._mouseDown) {
          this._mouseDown = false;
          this.release();
        }
      };
      if (this.ui) {
        const { element } = this.ui;
        element.addEventListener("mousedown", this.mouseDownListener);
        element.addEventListener("touchstart", this.touchStartListener);
        element.addEventListener("mouseup", this.mouseUpTouchEndListener);
        element.addEventListener("touchend", this.mouseUpTouchEndListener);
        element.addEventListener("keydown", this.keyListener);
        element.addEventListener("keyup", this.keyListener);
        element.addEventListener("mouseleave", this.mouseLeaveListener);
      }
    }
    setValue(value) {
      this.setValueInternal(value, false);
    }
    setValueInternal(value, internalChange) {
      super.setValue(value);
      if (internalChange) {
        this.onChange({
          [this.id]: this.state
        });
      }
      this.render();
    }
    mouseDownTouchStartAction() {
      this._mouseDown = true;
      this.press();
    }
    press() {
      this.setValueInternal(this.state.value === this.state.min ? this.state.max : this.state.min, true);
    }
    release() {
      this.setValueInternal(this.state.value === this.state.max ? this.state.min : this.state.max, true);
    }
    isTouched() {
      return !!this.state.value;
    }
    updateTranslations() {
      if (this.ui) {
        this.ui.element.ariaLabel = this.ui.label();
      }
    }
    render() {
      if (this.ui) {
        const fill = !!this.state.value ? "#00c800" : "url(#an)";
        this.ui.element.querySelectorAll("path").forEach((p) => {
          if (!p.classList.contains("no-edit")) {
            p.style.fill = fill;
          }
        });
      }
    }
    boardStopped() {
    }
  };

  // board/radio.ts
  var Radio = class {
    constructor(onSend, onChange, ticksMilliseconds) {
      this.onSend = onSend;
      this.onChange = onChange;
      this.ticksMilliseconds = ticksMilliseconds;
      this.state = { type: "radio", enabled: false, group: 0 };
    }
    peek() {
      return this.rxQueue[0];
    }
    pop() {
      this.rxQueue.shift();
    }
    send(data) {
      this.onSend(data);
    }
    receive(data) {
      if (this.rxQueue.length === this.config.queue) {
      } else {
        const len = Math.min(data.length, this.config.maxPayload);
        data = data.slice(0, len);
        const size = 1 + len + 1 + 4;
        const rssi = 127;
        const time = this.ticksMilliseconds();
        const packet = new Uint8Array(size);
        packet[0] = len;
        packet.set(data, 1);
        packet[1 + len] = rssi;
        packet[1 + len + 1] = time & 255;
        packet[1 + len + 2] = time >> 8 & 255;
        packet[1 + len + 3] = time >> 16 & 255;
        packet[1 + len + 4] = time >> 24 & 255;
        this.rxQueue.push(packet);
      }
    }
    updateConfig(config) {
      if (!this.config || config.queue !== this.config.queue || config.maxPayload !== this.config.maxPayload) {
        throw new Error("If queue or payload change then should call disable/enable.");
      }
      if (this.state.group !== config.group) {
        this.state.group = config.group;
        this.onChange({
          radio: this.state
        });
      }
    }
    enable(config) {
      this.config = config;
      this.rxQueue = [];
      if (!this.state.enabled) {
        this.state = {
          ...this.state,
          enabled: true,
          group: config.group
        };
        this.onChange({
          radio: this.state
        });
      }
    }
    disable() {
      this.rxQueue = void 0;
      if (this.state.enabled) {
        this.state.enabled = false;
        this.onChange({
          radio: this.state
        });
      }
    }
    boardStopped() {
      this.rxQueue = void 0;
      this.config = void 0;
      this.state = {
        type: "radio",
        enabled: false,
        group: 0
      };
    }
  };

  // board/wasm.ts
  var ModuleWrapper = class {
    constructor(module) {
      this.module = module;
      const main = module.cwrap("mp_js_main", "null", ["number"], {
        async: true
      });
      this.main = () => main(64 * 1024);
    }
    async start() {
      return this.main();
    }
    requestStop() {
      this.module._mp_js_request_stop();
    }
    forceStop() {
      this.module._mp_js_force_stop();
    }
    writeRadioRxBuffer(packet) {
      const buf = this.module._microbit_radio_rx_buffer();
      this.module.HEAPU8.set(packet, buf);
      return buf;
    }
  };

  // board/index.ts
  var PanicError = class extends Error {
    constructor(code) {
      super("panic");
      this.code = code;
    }
  };
  var ResetError = class extends Error {
    constructor() {
      super("reset");
    }
  };
  var stoppedOpactity = "0.5";
  function createBoard(notifications, fs2) {
    document.body.insertAdjacentHTML("afterbegin", microbit_drawing_default);
    const svg = document.querySelector("svg");
    if (!svg) {
      throw new Error("No SVG");
    }
    return new Board(notifications, fs2, svg);
  }
  var Board = class {
    constructor(notifications, fs2, svg) {
      this.notifications = notifications;
      this.fs = fs2;
      this.svg = svg;
      this.serialInputBuffer = [];
      this.language = "en";
      this.translations = {
        "button-a": "Button A",
        "button-b": "Button B",
        "touch-logo": "Touch logo",
        "start-simulator": "Start simulator"
      };
      this.formattedMessage = ({ id }) => {
        const result = this.translations[id];
        if (!result) {
          console.trace(`No string for code ${id}`);
        }
        return result != null ? result : id;
      };
      this.stopKind = "default" /* Default */;
      this.display = new Display(Array.from(this.svg.querySelector("#LEDsOn").querySelectorAll("use")));
      const onChange = this.notifications.onStateChange;
      this.buttons = [
        new Button("buttonA", this.svg.querySelector("#ButtonA"), () => this.formattedMessage({ id: "button-a" }), onChange),
        new Button("buttonB", this.svg.querySelector("#ButtonB"), () => this.formattedMessage({ id: "button-b" }), onChange)
      ];
      this.pins = Array(33);
      this.pins[MICROBIT_HAL_PIN_FACE] = new TouchPin("pinLogo", {
        element: this.svg.querySelector("#Logo"),
        label: () => this.formattedMessage({ id: "touch-logo" })
      }, onChange);
      this.pins[MICROBIT_HAL_PIN_P0] = new TouchPin("pin0", null, onChange);
      this.pins[MICROBIT_HAL_PIN_P1] = new TouchPin("pin1", null, onChange);
      this.pins[MICROBIT_HAL_PIN_P2] = new TouchPin("pin2", null, onChange);
      this.pins[MICROBIT_HAL_PIN_P3] = new StubPin("pin3");
      this.pins[MICROBIT_HAL_PIN_P4] = new StubPin("pin4");
      this.pins[MICROBIT_HAL_PIN_P5] = new StubPin("pin5");
      this.pins[MICROBIT_HAL_PIN_P6] = new StubPin("pin6");
      this.pins[MICROBIT_HAL_PIN_P7] = new StubPin("pin7");
      this.pins[MICROBIT_HAL_PIN_P8] = new StubPin("pin8");
      this.pins[MICROBIT_HAL_PIN_P9] = new StubPin("pin9");
      this.pins[MICROBIT_HAL_PIN_P10] = new StubPin("pin10");
      this.pins[MICROBIT_HAL_PIN_P11] = new StubPin("pin11");
      this.pins[MICROBIT_HAL_PIN_P12] = new StubPin("pin12");
      this.pins[MICROBIT_HAL_PIN_P13] = new StubPin("pin13");
      this.pins[MICROBIT_HAL_PIN_P14] = new StubPin("pin14");
      this.pins[MICROBIT_HAL_PIN_P15] = new StubPin("pin15");
      this.pins[MICROBIT_HAL_PIN_P16] = new StubPin("pin16");
      this.pins[MICROBIT_HAL_PIN_P19] = new StubPin("pin19");
      this.pins[MICROBIT_HAL_PIN_P20] = new StubPin("pin20");
      this.audio = new Audio();
      this.temperature = new RangeSensor("temperature", -5, 50, 21, "\xB0C");
      this.accelerometer = new Accelerometer(onChange);
      this.compass = new Compass();
      this.microphone = new Microphone(this.svg.querySelector("#LitMicrophone"), onChange);
      const currentTimeMillis = this.ticksMilliseconds.bind(this);
      this.radio = new Radio(this.notifications.onRadioOutput.bind(this.notifications), onChange, currentTimeMillis);
      this.dataLogging = new DataLogging(currentTimeMillis, this.notifications.onLogOutput, this.notifications.onSerialOutput, this.notifications.onLogDelete, onChange);
      this.stoppedOverlay = document.querySelector(".play-button-container");
      this.playButton = document.querySelector(".play-button");
      this.initializePlayButton();
      this.displayStoppedState();
      this.playButton.addEventListener("click", async () => {
        await this.audio.createAudioContextFromUserInteraction();
        this.notifications.onRequestFlash();
      });
      this.updateTranslationsInternal();
      this.notifications.onReady(this.getState());
    }
    setDisplay(display) {
      this.svg.style.display = display ? "" : "none";
    }
    async createModule() {
      const wrapped = await window.createModule({
        board: this,
        fs: this.fs,
        conversions: conversions_exports,
        noInitialRun: true,
        instantiateWasm
      });
      const module = new ModuleWrapper(wrapped);
      this.audio.initializeCallbacks({
        defaultAudioCallback: wrapped._microbit_hal_audio_ready_callback,
        speechAudioCallback: wrapped._microbit_hal_audio_speech_ready_callback
      });
      this.accelerometer.initializeCallbacks(wrapped._microbit_hal_gesture_callback);
      this.microphone.initializeCallbacks(wrapped._microbit_hal_level_detector_callback);
      return module;
    }
    updateTranslations(language, translations) {
      this.language = language;
      this.translations = translations;
      this.updateTranslationsInternal();
    }
    updateTranslationsInternal() {
      document.documentElement.lang = this.language;
      this.playButton.ariaLabel = this.formattedMessage({
        id: "start-simulator"
      });
      this.buttons.forEach((b) => b.updateTranslations());
      this.pins.forEach((b) => b.updateTranslations());
    }
    getState() {
      return {
        radio: this.radio.state,
        buttonA: this.buttons[0].state,
        buttonB: this.buttons[1].state,
        pinLogo: this.pins[MICROBIT_HAL_PIN_FACE].state,
        pin0: this.pins[MICROBIT_HAL_PIN_P0].state,
        pin1: this.pins[MICROBIT_HAL_PIN_P1].state,
        pin2: this.pins[MICROBIT_HAL_PIN_P2].state,
        accelerometerX: this.accelerometer.state.accelerometerX,
        accelerometerY: this.accelerometer.state.accelerometerY,
        accelerometerZ: this.accelerometer.state.accelerometerZ,
        gesture: this.accelerometer.state.gesture,
        compassX: this.compass.state.compassX,
        compassY: this.compass.state.compassY,
        compassZ: this.compass.state.compassZ,
        compassHeading: this.compass.state.compassHeading,
        lightLevel: this.display.lightLevel,
        dataLogging: this.dataLogging.state,
        soundLevel: this.microphone.soundLevel,
        temperature: this.temperature
      };
    }
    setValue(id, value) {
      switch (id) {
        case "accelerometerX":
        case "accelerometerY":
        case "accelerometerZ":
        case "gesture": {
          this.accelerometer.setValue(id, value);
          break;
        }
        case "compassX":
        case "compassY":
        case "compassZ":
        case "compassHeading": {
          this.compass.setValue(id, value);
          break;
        }
        case "buttonA": {
          this.buttons[0].setValue(value);
          break;
        }
        case "buttonB": {
          this.buttons[1].setValue(value);
          break;
        }
        case "pinLogo": {
          this.pins[MICROBIT_HAL_PIN_FACE].setValue(value);
          break;
        }
        case "pin0": {
          this.pins[MICROBIT_HAL_PIN_P0].setValue(value);
          break;
        }
        case "pin1": {
          this.pins[MICROBIT_HAL_PIN_P1].setValue(value);
          break;
        }
        case "pin2": {
          this.pins[MICROBIT_HAL_PIN_P2].setValue(value);
          break;
        }
        case "lightLevel": {
          this.display.lightLevel.setValue(value);
          break;
        }
        case "soundLevel": {
          this.microphone.setValue(value);
          break;
        }
        case "temperature": {
          this.temperature.setValue(value);
          break;
        }
      }
    }
    ticksMilliseconds() {
      return new Date().getTime() - this.epoch;
    }
    initializePlayButton() {
      const params = new URLSearchParams(window.location.search);
      const color = params.get("color");
      if (color) {
        this.playButton.style.color = color;
        this.playButton.style.borderColor = color;
      }
      this.playButton.style.display = "flex";
    }
    displayRunningState() {
      this.svg.style.opacity = "unset";
      const svgButtons = this.svg.querySelectorAll("[role='button']");
      for (const button of svgButtons) {
        button.setAttribute("tabindex", "0");
      }
      this.stoppedOverlay.style.display = "none";
    }
    displayStoppedState() {
      this.svg.style.opacity = stoppedOpactity;
      const svgButtons = this.svg.querySelectorAll("[role='button']");
      for (const button of svgButtons) {
        button.setAttribute("tabindex", "-1");
      }
      this.stoppedOverlay.style.display = "flex";
    }
    start() {
      if (this.runningPromise) {
        throw new Error("Already running!");
      }
      this.runningPromise = this.createRunningPromise();
    }
    async createRunningPromise() {
      if (this.modulePromise || this.module) {
        throw new Error("Module already exists!");
      }
      clearTimeout(this.pendingRestartTimeout);
      this.pendingRestartTimeout = null;
      this.modulePromise = this.createModule();
      const module = await this.modulePromise;
      this.module = module;
      let panicCode;
      try {
        this.displayRunningState();
        await module.start();
      } catch (e) {
        if (e instanceof PanicError) {
          if (this.stopKind === "default" /* Default */) {
            this.stopKind = "panic" /* Panic */;
            panicCode = e.code;
          }
        } else if (e instanceof ResetError) {
          if (this.stopKind === "default" /* Default */) {
            this.stopKind = "reset" /* Reset */;
          }
        } else {
          this.notifications.onInternalError(e);
        }
      }
      try {
        module.forceStop();
      } catch (e) {
        if (e.name !== "ExitStatus") {
          this.notifications.onInternalError(e);
        }
      }
      this.stopComponents();
      this.modulePromise = void 0;
      this.module = void 0;
      switch (this.stopKind) {
        case "panic" /* Panic */: {
          if (panicCode === void 0) {
            throw new Error("Must be set");
          }
          this.displayPanic(panicCode);
          break;
        }
        case "reset" /* Reset */: {
          this.pendingRestartTimeout = setTimeout(() => this.start(), 0);
          break;
        }
        case "brief" /* BriefStop */: {
          break;
        }
        case "user" /* UserStop */:
        case "default" /* Default */: {
          this.displayStoppedState();
          break;
        }
        default: {
          throw new Error("Unknown stop kind: " + this.stopKind);
        }
      }
      this.stopKind = "default" /* Default */;
      this.runningPromise = void 0;
    }
    async stop(brief = false) {
      this.audio.boardStopped();
      if (this.panicTimeout) {
        clearTimeout(this.panicTimeout);
        this.panicTimeout = null;
        this.display.clear();
        if (!brief) {
          this.displayStoppedState();
        }
      }
      if (this.pendingRestartTimeout) {
        clearTimeout(this.pendingRestartTimeout);
        this.pendingRestartTimeout = null;
        if (!brief) {
          this.displayStoppedState();
        }
      }
      if (this.modulePromise) {
        this.stopKind = brief ? "brief" /* BriefStop */ : "user" /* UserStop */;
        const module = await this.modulePromise;
        module.requestStop();
        this.modulePromise = void 0;
        this.module = void 0;
        this.writeSerialInput("");
      }
      return this.runningPromise;
    }
    async reset() {
      await this.stop(true);
      this.start();
    }
    async flash(filesystem) {
      const flashFileSystem = () => {
        this.fs.clear();
        Object.entries(filesystem).forEach(([name, value]) => {
          const idx = this.fs.create(name);
          this.fs.write(idx, value, true);
        });
        this.dataLogging.delete();
      };
      await this.stop(true);
      flashFileSystem();
      return this.start();
    }
    throwPanic(code) {
      throw new PanicError(code);
    }
    throwReset() {
      throw new ResetError();
    }
    displayPanic(code) {
      const sad = [
        [9, 9, 0, 9, 9],
        [9, 9, 0, 9, 9],
        [0, 0, 0, 0, 0],
        [0, 9, 9, 9, 0],
        [9, 0, 0, 0, 9]
      ];
      const digitFont = [
        [
          [0, 9, 9, 0, 0],
          [9, 0, 0, 9, 0],
          [9, 0, 0, 9, 0],
          [9, 0, 0, 9, 0],
          [0, 9, 9, 0, 0]
        ],
        [
          [0, 0, 9, 0, 0],
          [0, 9, 9, 0, 0],
          [0, 0, 9, 0, 0],
          [0, 0, 9, 0, 0],
          [0, 9, 9, 9, 0]
        ],
        [
          [9, 9, 9, 0, 0],
          [0, 0, 0, 9, 0],
          [0, 9, 9, 0, 0],
          [9, 0, 0, 0, 0],
          [9, 9, 9, 9, 0]
        ],
        [
          [9, 9, 9, 9, 0],
          [0, 0, 0, 9, 0],
          [0, 0, 9, 0, 0],
          [9, 0, 0, 9, 0],
          [0, 9, 9, 0, 0]
        ],
        [
          [0, 0, 9, 9, 0],
          [0, 9, 0, 9, 0],
          [9, 0, 0, 9, 0],
          [9, 9, 9, 9, 9],
          [0, 0, 0, 9, 0]
        ],
        [
          [9, 9, 9, 9, 9],
          [9, 0, 0, 0, 0],
          [9, 9, 9, 9, 0],
          [0, 0, 0, 0, 9],
          [9, 9, 9, 9, 0]
        ],
        [
          [0, 0, 0, 9, 0],
          [0, 0, 9, 0, 0],
          [0, 9, 9, 9, 0],
          [9, 0, 0, 0, 9],
          [0, 9, 9, 9, 0]
        ],
        [
          [9, 9, 9, 9, 9],
          [0, 0, 0, 9, 0],
          [0, 0, 9, 0, 0],
          [0, 9, 0, 0, 0],
          [9, 0, 0, 0, 0]
        ],
        [
          [0, 9, 9, 9, 0],
          [9, 0, 0, 0, 9],
          [0, 9, 9, 9, 0],
          [9, 0, 0, 0, 9],
          [0, 9, 9, 9, 0]
        ],
        [
          [0, 9, 9, 9, 0],
          [9, 0, 0, 0, 9],
          [0, 9, 9, 9, 0],
          [0, 0, 9, 0, 0],
          [0, 9, 0, 0, 0]
        ]
      ];
      let digits = code.toString();
      digits = digits.slice(-3);
      const prefix = "0".repeat(3 - digits.length);
      digits = prefix + digits;
      const frames = [
        sad,
        ...Array.from(digits).map((d) => digitFont[parseInt(d, 10)])
      ];
      let nextFrameIndex = 0;
      const showNextFrame = () => {
        this.display.show(frames[nextFrameIndex++ % frames.length]);
        this.panicTimeout = setTimeout(() => {
          this.display.clear();
          this.panicTimeout = setTimeout(showNextFrame, 60);
        }, 600);
      };
      showNextFrame();
    }
    mute() {
      this.audio.mute();
    }
    unmute() {
      this.audio.unmute();
    }
    writeSerialInput(text) {
      for (let i = 0; i < text.length; i++) {
        this.serialInputBuffer.push(text.charCodeAt(i));
      }
    }
    readSerialInput() {
      var _a;
      return (_a = this.serialInputBuffer.shift()) != null ? _a : -1;
    }
    writeSerialOutput(text) {
      if (this.modulePromise) {
        this.notifications.onSerialOutput(text);
      }
    }
    writeRadioRxBuffer(packet) {
      if (!this.module) {
        throw new Error("Must be running as called via HAL");
      }
      return this.module.writeRadioRxBuffer(packet);
    }
    initialize() {
      this.epoch = new Date().getTime();
      this.serialInputBuffer.length = 0;
    }
    stopComponents() {
      this.audio.boardStopped();
      this.buttons.forEach((b) => b.boardStopped());
      this.pins.forEach((p) => p.boardStopped());
      this.display.boardStopped();
      this.accelerometer.boardStopped();
      this.compass.boardStopped();
      this.microphone.boardStopped();
      this.radio.boardStopped();
      this.dataLogging.boardStopped();
      this.serialInputBuffer.length = 0;
      this.notifications.onStateChange(this.getState());
    }
  };
  var Notifications = class {
    constructor(target) {
      this.target = target;
      this.onReady = (state) => {
        this.postMessage("ready", {
          state
        });
      };
      this.onRequestFlash = () => {
        this.postMessage("request_flash", {});
      };
      this.onStateChange = (change) => {
        this.postMessage("state_change", {
          change
        });
      };
      this.onSerialOutput = (data) => {
        this.postMessage("serial_output", { data });
      };
      this.onRadioOutput = (data) => {
        this.postMessage("radio_output", { data });
      };
      this.onLogOutput = (data) => {
        this.postMessage("log_output", data);
      };
      this.onLogDelete = () => {
        this.postMessage("log_delete", {});
      };
      this.onInternalError = (error) => {
        this.postMessage("internal_error", { error });
      };
    }
    postMessage(kind, data) {
      this.target.postMessage({
        kind,
        ...data
      }, "*");
    }
  };
  var createMessageListener = (board2) => (e) => {
    if (e.source === window.parent) {
      const { data } = e;
      switch (data.kind) {
        case "config": {
          const { language, translations } = data;
          board2.updateTranslations(language, translations);
          break;
        }
        case "flash": {
          const { filesystem } = data;
          if (!isFileSystem(filesystem)) {
            throw new Error("Invalid flash filesystem field.");
          }
          board2.flash(filesystem);
          break;
        }
        case "stop": {
          board2.stop();
          break;
        }
        case "reset": {
          board2.reset();
          break;
        }
        case "mute": {
          board2.mute();
          break;
        }
        case "unmute": {
          board2.unmute();
          break;
        }
        case "serial_input": {
          if (typeof data.data !== "string") {
            throw new Error("Invalid serial_input data field.");
          }
          board2.writeSerialInput(data.data);
          break;
        }
        case "radio_input": {
          if (!(data.data instanceof Uint8Array)) {
            throw new Error("Invalid radio_input data field.");
          }
          board2.radio.receive(data.data);
          break;
        }
        case "set_value": {
          const { id, value } = data;
          if (typeof id !== "string") {
            throw new Error(`Invalid id field type: ${id}`);
          }
          board2.setValue(id, value);
          break;
        }
        case "set_display": {
          board2.setDisplay(data.display);
          break;
        }
      }
    }
  };
  function isFileSystem(fileSystem) {
    if (typeof fileSystem !== "object") {
      return false;
    }
    return Object.entries(fileSystem).every(([k, v]) => typeof k === "string" && v instanceof Uint8Array);
  }
  var fetchWasm = async () => {
    const response = await fetch("./build/firmware.wasm");
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.arrayBuffer();
  };
  var compileWasm = async () => {
    return WebAssembly.compile(new Uint8Array(await fetchWasm()));
  };
  var compiledWasmPromise = compileWasm();
  var instantiateWasm = function(imports, successCallback) {
    compiledWasmPromise.then(async (wasmModule) => {
      const instance = await WebAssembly.instantiate(wasmModule, imports);
      successCallback(instance);
    }).catch((e) => {
      console.error("Failed to instantiate WASM");
      console.error(e);
    });
    return {};
  };

  // simulator.ts
  var fs = new FileSystem();
  var board = createBoard(new Notifications(window.parent), fs);
  window.addEventListener("message", createMessageListener(board));
})();
