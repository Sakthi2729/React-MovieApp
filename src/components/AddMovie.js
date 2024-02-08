import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as yup from "yup";
import { useFormik } from "formik";

export function AddMovie() {
  const movievalidationschema = yup.object({
    name: yup.string().required(),
    poster: yup.string().required().min(10).url(),
    trailer: yup.string().required().min(10).url(),
    rating: yup.string().required() .min(0).max(20),
    summary: yup.string().required().min(20)
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      trailer: "",
      rating: "",
      summary: "",
    },
    validationSchema: movievalidationschema,
    onSubmit: (values) => {
      console.log("Form Values:", values)
    }
  });
  return (
    <form className="add-form" onSubmit={formik.handleSubmit}>
      <h1>Add Movie</h1>
      <TextField
        id="filled-basic"
        label="Name"
        variant="filled"
        value={formik.values.name}
        onChange={formik.handleChange}
        name="name"
        onBlur={formik.handleBlur}
        error={formik.touched.name && formik.errors.name}
        helperText={formik.touched.name && formik.errors.name ? formik.errors.name :null}
      /> 
      <TextField
        id="filled-basic"
        label="Poster"
        variant="filled"
        value={formik.values.poster}
        onChange={formik.handleChange}
        name="poster"
        onBlur={formik.handleBlur}
        error={formik.touched.poster && formik.errors.poster}
        helperText={formik.touched.poster && formik.errors.poster ? formik.errors.poster :null}
      />
      <TextField
        id="filled-basic"
        label="Trailer"
        variant="filled"
        value={formik.values.trailer}
        onChange={formik.handleChange}
        name="trailer"
        onBlur={formik.handleBlur}
        error={formik.touched.trailer && formik.errors.trailer}
        helperText={formik.touched.trailer && formik.errors.name ? formik.errors.trailer :null}
      />
      <TextField
        id="filled-basic"
        label="Rating"
        variant="filled"
        value={formik.values.rating}
        onChange={formik.handleChange}
        name="rating"
        onBlur={formik.handleBlur}
        error={formik.touched.rating && formik.errors.rating}
        helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating :null}
      />
      <TextField
        id="filled-basic"
        label="Summary"
        variant="filled"
        value={formik.values.summary}
        onChange={formik.handleChange}
        name="summary"
        nBlur={formik.handleBlur}
        error={formik.touched.summary && formik.errors.summary}
        helperText={formik.touched.summary && formik.errors.summary ? formik.errors.summary :null}
      />
      <Button variant="contained" type="submit">
        Add Movie
      </Button>
    </form>
  );
}
