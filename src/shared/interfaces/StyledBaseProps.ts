import { AbstractProps } from './AbstractProps';

export interface StyledBaseProps extends AbstractProps {
    readonly 'data-testid'?: string;
}
