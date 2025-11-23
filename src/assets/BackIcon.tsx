import Svg, { Path, SvgProps } from 'react-native-svg';

function BackIcon(props: SvgProps) {
  return (
    <Svg
      x="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="white"
      {...props}
    >
      <Path d="M313-440l224 224-57 56-320-320 320-320 57 56-224 224h487v80H313z" />
    </Svg>
  );
}

export default BackIcon;
