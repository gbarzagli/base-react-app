import { AbstractProps } from './AbstractProps';

export interface BaseProps extends AbstractProps {
    readonly dataTestId?: string;
}
