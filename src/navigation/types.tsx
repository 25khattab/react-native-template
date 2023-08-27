import type {
  RouteProp as NRouteProp,
  NavigationProp,
  ParamListBase,
  RouteConfig,
  StackNavigationState,
} from '@react-navigation/native';

import type {AuthStackParamList} from './auth-navigator';
import {AppTabParamList} from './tab-navigator';
import { AppStackParamList } from './app-navigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { NativeStackNavigationEventMap, NativeStackNavigationOptions } from '@react-navigation/native-stack';

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

export type INavigationType<T extends keyof RootStackParamList> = 
  StackNavigationProp<RootStackParamList, T>;
  
  
export type IStackRouteType<ParamList extends ParamListBase> = 
  RouteConfig<
  ParamList,
    keyof ParamList ,
    StackNavigationState<ParamList>,
    NativeStackNavigationOptions,
    NativeStackNavigationEventMap
  >