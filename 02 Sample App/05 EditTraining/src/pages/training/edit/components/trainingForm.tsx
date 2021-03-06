import * as React from 'react';
import * as moment from 'moment';
import {Training} from '../../../../models/training';
import {InputComponent} from '../../../../common/components/form/input';
import {CheckBoxComponent} from '../../../../common/components/form/checkBox';
import {InputButtonComponent} from '../../../../common/components/form/inputButton';
import {DatePickerModalComponent} from '../../../../common/components/datePickerModal';
import {formatConstants} from '../../../../common/constants/formatConstants';

interface Props {
  training: Training;
  onChange: (event) => void;
  save: (event) => void;
  isOpenStartDateModal: boolean;
  toggleOpenStartDateModal: () => void;
  onChangeStartDate: (date: moment.Moment) => void;
  isOpenEndDateModal: boolean;
  toggleOpenEndDateModal: () => void;
  onChangeEndDate: (date: moment.Moment) => void;
}

export const TrainingFormComponent = (props: Props) => {
  return (
    <form className="container">
      <div className="row">
        <InputComponent
          className="col-md-6"
          type="text"
          label="Name"
          name="name"
          onChange={props.onChange}
          value={props.training.name}
          placeholder="Name"
        />

        <InputComponent
          className="col-md-6"
          type="text"
          label="Url"
          name="url"
          onChange={props.onChange}
          value={props.training.url}
          placeholder="Url"
        />
      </div>

      <div className="row">
        <InputButtonComponent
          className="col-md-6"
          type="text"
          label="Start date"
          name="startDate"
          placeholder="Start date"
          value={moment(props.training.startDate).format(formatConstants.shortDate)}
          onChange={props.onChange}
          disabled
          buttonClassName="btn btn-default"
          onClick={props.toggleOpenStartDateModal}
          icon="glyphicon glyphicon-calendar"
        />

        <DatePickerModalComponent
          isOpen={props.isOpenStartDateModal}
          onClose={props.toggleOpenStartDateModal}
          selectedDate={props.training.startDate}
          onChange={props.onChangeStartDate}
        />

        <InputButtonComponent
          className="col-md-6"
          type="text"
          label="End date"
          name="endDate"
          placeholder="End date"
          value={moment(props.training.endDate).format(formatConstants.shortDate)}
          onChange={props.onChange}
          disabled
          buttonClassName="btn btn-default"
          onClick={props.toggleOpenEndDateModal}
          icon="glyphicon glyphicon-calendar"
        />

        <DatePickerModalComponent
          isOpen={props.isOpenEndDateModal}
          onClose={props.toggleOpenEndDateModal}
          selectedDate={props.training.endDate}
          onChange={props.onChangeEndDate}
        />
      </div>

      <div className="row">
        <CheckBoxComponent
          className="col-md-6"
          label="Active"
          name="isActive"
          onChange={props.onChange}
          value={props.training.isActive}
        />
      </div>

      <div className="row">
        <div className="form-group pull-right">
          <div className="col-md-1">
            <button
              type="button"
              className="btn btn-lg btn-success"
              onClick={props.save}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
