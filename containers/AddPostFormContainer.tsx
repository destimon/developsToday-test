import React, { useCallback, useEffect } from "react";
import { FormikErrors, FormikHelpers } from "formik";
import { PostType } from "../interfaces";
import { addPostAsync, clearAddPostResult } from "../store/actions/postActions";
import { connect } from "react-redux";
import AddPostForm from "../components/Forms/AddPostForm";

interface Props {
  addPostAsync: (formData: PostType) => void;
  clearAddPostResult: () => void;
  post: {
    addPostLoading: boolean;
    addPostResult: string;
  };
}

const AddPostFormContainer: React.FC<Props> = ({
  addPostAsync,
  clearAddPostResult,
  post: { addPostLoading, addPostResult },
}) => {
  const initialValues: PostType = {
    title: "",
    body: "",
    author: "",
  };

  useEffect(() => {
    return () => {
      clearAddPostResult();
    };
  }, []);

  const formSubmit = useCallback(
    (values: PostType, { setSubmitting }: FormikHelpers<PostType>) => {
      addPostAsync(values);
      setSubmitting(false);
    },
    []
  );

  const validateForm = useCallback((values: PostType) => {
    const errors: FormikErrors<{ title: string; body: string }> = {};
    if (!values.title) {
      errors.title = "* Title is required!";
    }
    if (!values.body) {
      errors.body = "* Body is required!";
    }
    return errors;
  }, []);

  return (
    <AddPostForm
      initialValues={initialValues}
      validateForm={validateForm}
      addPostLoading={addPostLoading}
      formSubmit={formSubmit}
      addPostResult={addPostResult}
    />
  );
};

const mapStateToProps = (state: Props) => {
  return {
    post: state.post,
  };
};

export default connect(mapStateToProps, { addPostAsync, clearAddPostResult })(
  AddPostFormContainer
);
