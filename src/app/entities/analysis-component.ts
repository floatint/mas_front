import { AnalysisOrder } from './analysis-order';

export interface AnalysisComponent {
    id: number,
    name: string,
    strValue: string,
    numValue: number,
    order: AnalysisOrder
}