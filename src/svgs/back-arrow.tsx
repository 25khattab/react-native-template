import { SIZES } from '@/constants/spacing';
import type {SvgProps} from 'react-native-svg';
import Svg, {Path} from 'react-native-svg';

export const BackArrowIcon = ({color = '#000',supportRTL=false, ...props}: SvgProps&{supportRTL?:boolean}) => (
    <Svg
      width={SIZES.xxLarge}
      height={SIZES.xxLarge}
      viewBox="0 0 1024 1024"
      transform={[{scaleX:supportRTL?-1:1}]}
      {...props}
    >
      <Path d="M224 480h640a32 32 0 110 64H224a32 32 0 010-64z"  fill={color}/>
      <Path d="M237.248 512l265.408 265.344a32 32 0 01-45.312 45.312l-288-288a32 32 0 010-45.312l288-288a32 32 0 1145.312 45.312L237.248 512z" fill={color}/>
    </Svg>
);