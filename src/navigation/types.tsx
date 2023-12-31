import type {
  RouteProp as NRouteProp,
  NavigationProp,
  ParamListBase,
  RouteConfig,
  StackNavigationState,
} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap,
} from '@react-navigation/native-stack';

import type {AuthStackParamList} from './auth-navigator';
import {AppTabParamList} from './tab-navigator';
import {AppStackParamList} from './app-navigator';

// add every new Param list
export type RootStackParamList = AppTabParamList & AppStackParamList; //  & FooStackParamList & BarStackParamList

// auth navigation props should be alone

export type AuthNavigationProps = NavigationProp<AuthStackParamList>;

// very important to type check useNavigation hook
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RouteProp<T extends keyof RootStackParamList> = NRouteProp<
  RootStackParamList,
  T
>;

export type IStackRouteType<ParamList extends ParamListBase> = RouteConfig<
  ParamList,
  keyof ParamList,
  StackNavigationState<ParamList>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap
>;
