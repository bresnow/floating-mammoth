import React, {SVGProps} from 'react';
import Svg, {Path} from 'react-native-svg';

interface iLogo extends SVGProps<SVGElement> {}

export default function MammothLogo(props: iLogo) {
  return (
    <Svg
      fill={props.fill}
      width={props.width}
      height={props.width}
      viewBox="0 0 359 332">
      <Path d="M73.486 168.366l-.238-.96c-37.888 3.552-57.596 32.364-66.243 50.446-4.354 9.103-8.78 27.922-5.185 48.164 3.6 20.27 15.246 41.963 43.024 56.738 22.247 11.834 41.452 10.102 56.41 3.098 14.627-6.849 25.165-18.726 30.538-27.807.846.92 1.849 2.372 2.958 4.164 1.3 2.101 2.714 4.616 4.154 7.177l.009.016c1.983 3.527 4.017 7.144 5.841 9.823.912 1.339 1.788 2.469 2.595 3.24.404.385.807.698 1.206.899.397.201.826.308 1.255.224 4.394-.815 7.532-3.494 9.659-6.471 2.125-2.973 3.267-6.276 3.671-8.429l.042-.222-.14-.178c-20.304-25.926-26.672-52.463-26.396-74.117.138-10.83 1.938-20.437 4.488-28.133 2.483-7.498 5.666-13.148 8.686-16.357 1.811.973 4.061 3.014 6.548 5.772 2.622 2.907 5.464 6.557 8.275 10.454 5.622 7.793 11.1 16.538 14.426 22.211l.431.736.431-.736c3.326-5.673 8.804-14.418 14.426-22.211 2.811-3.897 5.653-7.547 8.275-10.454 2.487-2.758 4.737-4.799 6.549-5.772 3.019 3.209 6.202 8.859 8.685 16.357 2.55 7.696 4.35 17.303 4.488 28.133.276 21.654-6.092 48.191-26.396 74.117l-.139.178.041.222c.404 2.153 1.546 5.456 3.671 8.429 2.128 2.977 5.265 5.656 9.659 6.471.429.084.858-.023 1.256-.224s.802-.514 1.205-.899c.807-.771 1.683-1.901 2.595-3.24 1.825-2.679 3.858-6.296 5.841-9.823l.009-.016c1.44-2.561 2.854-5.076 4.154-7.177 1.109-1.792 2.112-3.244 2.958-4.164 5.373 9.081 15.911 20.958 30.538 27.807 14.958 7.004 34.164 8.736 56.411-3.098 27.777-14.775 39.423-36.468 43.023-56.738 3.596-20.242-.831-39.061-5.185-48.164-8.647-18.082-28.355-46.894-66.243-50.446l-.238.96c4.079 1.684 10.686 5.113 17.207 9.915 6.525 4.805 12.924 10.956 16.636 18.071l.011.02.012.02c4.21 6.541 9.952 19.21 11.037 33.682 1.083 14.455-2.477 30.691-16.841 44.458-4.61 4.418-12.511 8.09-21.291 8.042-8.755-.048-18.409-3.796-26.564-14.259-6.879-8.825-20.825-33.622-21.449-62.016-.217-9.861.317-17.619.77-24.206l.004-.052c.589-8.547 1.045-15.179-.509-21.832-1.561-6.684-5.139-13.347-12.534-22.022-10.16-11.918-14.496-21.622-15.167-28.139-.335-3.26.25-5.661 1.405-7.164 1.138-1.48 2.886-2.166 5.09-1.891 5.777.723 7.193 7.456 2.657 10.372-.596.02-1.102.167-1.503.436a2.044 2.044 0 00-.84 1.19c-.247.926.071 2.022.71 2.937 1.304 1.869 4.119 3.243 7.5 1.472.789-.413 1.36-.699 1.768-.873.1-.043.188-.078.263-.106-.041.148-.101.336-.177.574l-.004.01c-.324 1.008-.839 2.608-.785 4.606.056 2.016.689 4.407 2.612 7.008 1.066 1.443.986 2.918.87 4.722l-.002.03c-.103 1.6-.221 3.421.658 5.415.873 1.98 2.694 4.063 6.3 6.327.924 2.556 2.807 4.9 5.213 7.009 2.462 2.157 5.502 4.094 8.704 5.78 6.403 3.373 13.515 5.776 18.116 6.959l.28.072.202-.206c6.673-6.809 11.897-28.683-17.479-62.831.224-3.291-.469-8.206-3.267-12.573-2.817-4.396-7.743-8.2-15.901-9.25.779-7.407 1.805-18.825 2.419-29.642.314-5.529.52-10.905.53-15.511.01-4.595-.175-8.457-.656-10.938-1.918-9.91-9.052-15.331-12.435-16.821-4.745-2.175-12.904-4.913-22.009-6.085C198.05-.086 188.04.282 179.5 4.32c-8.54-4.038-18.55-4.406-27.575-3.244-9.105 1.172-17.264 3.91-22.009 6.085-3.383 1.49-10.517 6.91-12.435 16.82-.48 2.482-.666 6.344-.656 10.939.01 4.605.216 9.982.53 15.51.614 10.818 1.64 22.236 2.419 29.643-8.158 1.05-13.084 4.854-15.901 9.25-2.798 4.367-3.491 9.282-3.267 12.573-29.376 34.148-24.152 56.022-17.479 62.831l.203.206.279-.072c4.601-1.183 11.713-3.586 18.116-6.959 3.203-1.686 6.242-3.623 8.704-5.78 2.406-2.109 4.289-4.453 5.213-7.009 3.606-2.264 5.427-4.347 6.3-6.327.879-1.994.762-3.815.658-5.415l-.001-.03c-.117-1.804-.197-3.279.87-4.722 1.922-2.601 2.555-4.992 2.611-7.008.055-1.998-.461-3.598-.785-4.606l-.004-.01a17.116 17.116 0 01-.177-.574c.075.028.163.063.263.106.408.174.979.46 1.768.873 3.381 1.771 6.196.397 7.5-1.472.639-.915.957-2.011.71-2.937a2.044 2.044 0 00-.84-1.19c-.401-.269-.907-.416-1.503-.436-4.535-2.916-3.12-9.649 2.657-10.372 2.204-.275 3.952.411 5.09 1.891 1.155 1.503 1.741 3.904 1.405 7.164-.671 6.517-5.007 16.221-15.167 28.139-7.395 8.675-10.973 15.338-12.534 22.022-1.554 6.653-1.097 13.285-.509 21.832l.004.052c.453 6.587.987 14.345.771 24.206-.624 28.394-14.571 53.191-21.45 62.016-8.154 10.463-17.809 14.211-26.564 14.259-8.78.048-16.68-3.624-21.29-8.042-14.365-13.767-17.925-30.003-16.842-44.458 1.085-14.472 6.827-27.141 11.037-33.682l.013-.02.01-.02c3.712-7.115 10.111-13.266 16.636-18.071 6.52-4.802 13.128-8.231 17.207-9.915zm106.375-40.149c-.12-.002-.241-.003-.361-.003h-.5v.029c-6.282.277-11.784 2.53-15.087 4.52 1.825-3.26 4.514-5.571 7.293-7.132 3.219-1.808 6.53-2.592 8.685-2.679 4.006.163 11.364 2.768 15.22 9.836-3.313-1.97-8.864-4.208-14.29-4.534l.003-.04h-.54l-.423.003zm18.751 36.009a1718.7 1718.7 0 01-9.897 19.724c-3.448 6.748-6.589 12.721-7.918 14.806h-2.593c-1.33-2.085-4.471-8.058-7.919-14.806a1718.7 1718.7 0 01-9.897-19.724c-1.686-11.295.95-17.425 4.961-20.767 4.06-3.383 9.665-4.033 14.151-4.055 4.287.022 9.895.671 14.006 4.057 4.061 3.344 6.791 9.476 5.106 20.765z" />
    </Svg>
  );
}