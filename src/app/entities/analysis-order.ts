import { Analysis } from './analysis';
import { User } from './user';
import { AnalysisComponent } from './analysis-component';

export interface AnalysisOrder {
    id: number, 
    analysis: Analysis,
    date: Date,
    customer: User,
    executor: User,
    results: AnalysisComponent[]
}