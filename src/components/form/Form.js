import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import generate from "../../utils/pdf";
import classes from "./Form.module.css";

import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // When form is submitted trigger generate pdf
  const onSubmit = (formData) => {
    generate(formData);
  };

  // Constant for temporary saving dates
  const startDate = watch("from");
  const endDate = watch("to");

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.form__divider}>GENERAL</div>
      <div className={classes.form__group}>
        <label className={classes.form__label}>Location</label>
        <input
          className={classes.form__field}
          type="text"
          {...register("site_name", { required: true })}
        />
        {errors.site_name && (
          <span className={classes.form__error}>This field is required</span>
        )}
      </div>
      <div className={classes.form__group}>
        <label className={classes.form__label}>Created by</label>
        <input
          className={classes.form__field}
          type="text"
          {...register("reporter", { required: true })}
        />
        {errors.reporter && (
          <span className={classes.form__error}>This field is required</span>
        )}
      </div>
      <div className={classes.form__group}>
        <label className={classes.form__label}>Date from</label>
        <Controller
          name="from"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <DatePicker
              className={classes.form__field}
              selectsStart
              selected={startDate}
              startDate={startDate}
              endDate={endDate}
              onChange={(date) => field.onChange(new Date(date))}
              dateFormat="MMM d, yyyy"
            />
          )}
        />
        {errors.from && (
          <span className={classes.form__error}>This field is required</span>
        )}
      </div>
      <div className={classes.form__group}>
        <label className={classes.form__label}>Data to</label>
        <Controller
          name="to"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <DatePicker
              selected={endDate}
              startDate={startDate}
              selectsEnd
              endDate={endDate}
              minDate={startDate}
              className={classes.form__field}
              onChange={(date) => field.onChange(new Date(date))}
              dateFormat="MMM d, yyyy"
            />
          )}
        />
        {errors.to && (
          <span className={classes.form__error}>This field is required</span>
        )}
      </div>
      <div className={classes.form__divider}>GOOD</div>
      <div className={classes.form__group}>
        <label className={classes.form__label}>Label</label>
        <input
          type="text"
          className={classes.form__field}
          {...register("ratings_by_level.good.label", { required: true })}
        />
        {errors.ratings_by_level?.good?.label && (
          <span className={classes.form__error}>This field is required</span>
        )}
      </div>
      <div className={classes.form__group}>
        <label className={classes.form__label}>Co2</label>
        <input
          className={classes.form__field}
          type="number"
          {...register("ratings_by_level.good.co2")}
        />
      </div>
      <div className={classes.form__group}>
        <label className={classes.form__label}>Voc</label>
        <input
          className={classes.form__field}
          type="number"
          {...register("ratings_by_level.good.voc")}
        />
      </div>
      <div className={classes.form__group}>
        <label className={classes.form__label}>Pm</label>
        <input
          className={classes.form__field}
          type="number"
          {...register("ratings_by_level.good.pm")}
        />
      </div>
      <div className={classes.form__divider}>MODERATE</div>
      <div className={classes.form__group}>
        <label className={classes.form__label}>Label</label>
        <input
          type="text"
          className={classes.form__field}
          {...register("ratings_by_level.moderate.label", { required: true })}
        />
        {errors.ratings_by_level?.moderate?.label && (
          <span className={classes.form__error}>This field is required</span>
        )}
      </div>
      <div className={classes.form__group}>
        <label className={classes.form__label}>Co2</label>
        <input
          className={classes.form__field}
          type="number"
          {...register("ratings_by_level.moderate.co2", {
            valueAsNumber: true,
          })}
        />
      </div>
      <div className={classes.form__group}>
        <label className={classes.form__label}>Voc</label>
        <input
          className={classes.form__field}
          type="number"
          {...register("ratings_by_level.moderate.voc", {
            valueAsNumber: true,
          })}
        />
      </div>
      <div className={classes.form__group}>
        <label className={classes.form__label}>Pm</label>
        <input
          className={classes.form__field}
          type="number"
          {...register("ratings_by_level.moderate.pm")}
        />
      </div>
      <div className={classes.form__divider}>HIGH</div>
      <div className={classes.form__group}>
        <label className={classes.form__label}>Label</label>
        <input
          type="text"
          className={classes.form__field}
          {...register("ratings_by_level.high.label", { required: true })}
        />
        {errors.ratings_by_level?.high?.label && (
          <span className={classes.form__error}>This field is required</span>
        )}
      </div>
      <div className={classes.form__group}>
        <label className={classes.form__label}>Co2</label>
        <input
          className={classes.form__field}
          type="number"
          {...register("ratings_by_level.high.co2")}
        />
      </div>
      <div className={classes.form__group}>
        <label className={classes.form__label}>Voc</label>
        <input
          className={classes.form__field}
          type="number"
          {...register("ratings_by_level.high.voc")}
        />
      </div>
      <div className={classes.form__group}>
        <label className={classes.form__label}>Pm</label>
        <input
          className={classes.form__field}
          type="number"
          {...register("ratings_by_level.high.pm")}
        />
      </div>
      <div className={classes.form__group}>
        <input
          type="submit"
          value="Generate pdf"
          className={classes.form__button}
        />
      </div>
    </form>
  );
};

export default Form;
