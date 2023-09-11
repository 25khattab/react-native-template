import {useFocusEffect} from '@react-navigation/native';
import {AvoidSoftInput} from 'react-native-avoid-softinput';

/**
 *  This hook should be used in every screen that has a form input field to avoid the keyboard
 *  This is not a one for all solution, if you want more customization please refer to those examples: https://mateusz1913.github.io/react-native-avoid-softinput/docs/recipes/recipes-form
 */

export const useSoftKeyboardEffect = () => {
  useFocusEffect(() => {
    AvoidSoftInput.setShouldMimicIOSBehavior(true);
    AvoidSoftInput.setEnabled(true);
    //AvoidSoftInput.setAvoidOffset(50);

    AvoidSoftInput.setEasing('easeInOut');
    AvoidSoftInput.setAdjustResize();
    AvoidSoftInput.setShowAnimationDelay(0);
    AvoidSoftInput.setShowAnimationDuration(0);
    AvoidSoftInput.setHideAnimationDuration(100);
    AvoidSoftInput.setHideAnimationDelay(0);
    return () => {
      AvoidSoftInput.setAvoidOffset(0);
      AvoidSoftInput.setEnabled(false);
      AvoidSoftInput.setShouldMimicIOSBehavior(false);
    };
  });
};
