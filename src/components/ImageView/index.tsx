import React from 'react';
import { Platform, UIManager, requireNativeComponent } from 'react-native';


const ComponentName = 'MYRCTImageView';

const LINKING_ERROR =
    `The package 'RNTRecentGalleryiOS' doesn't seem to be linked. Make sure: \n\n` +
    Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
    '- You rebuilt the app after installing the package\n' +
    '- You are not using Expo Go\n';

interface RNImageViewProps {
}

const RCTCustomView =
    UIManager.getViewManagerConfig(ComponentName) != null
        ? requireNativeComponent<RNImageViewProps>(ComponentName)
        : () => {
            throw new Error(LINKING_ERROR);
        };

class MYRCTImageView extends React.PureComponent<RNImageViewProps> {
    render() {
        return <RCTCustomView {...this.props} />;
    }
}
export default MYRCTImageView;
