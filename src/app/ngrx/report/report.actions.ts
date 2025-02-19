import { createAction, props } from '@ngrx/store';
import { AllReportModel, ReportModel } from '../../models/report.model';

export const getAllReports = createAction(
  '[Report] Get All Reports',
  props<{ token: string; page: number; types: string }>(),
);

export const getAllReportsSuccess = createAction(
  '[Report] Get All Reports Success',
  props<{ reportList: AllReportModel }>(),
);

export const getAllReportsFailure = createAction(
  '[Report] Get All Reports Failure',
  props<{ errorMessage: string }>(),
);

export const allReport = createAction(
  '[Report] All Report ',
  props<{ token: string }>(),
);

export const allReportSuccess = createAction(
  '[Report] All Report Success',
  props<{ allReport: ReportModel[] }>(),
);

export const allReportFailure = createAction(
  '[Report] All Report Failure',
  props<{ errorMessage: string }>(),
);
