"use client";
import { Button, Col, Form, Input, Row } from "antd";
import { useCallback, useContext } from "react";
import AntTextFieldElement from "../../components/AntTextFieldElement";
import { DataContext, TUser } from "@/context/DataContext";

function Register() {
  const context = useContext(DataContext);
  const { setData, data: dataContext } = context || {};
  const handleSubmit = useCallback(
    (data: TUser) => {
      console.log({ data });
      const { username, email, password } = data;
      setData?.((prev) => ({
        user: [...prev.user, { username, email, password }],
      }));

      console.log({ dataContext });
    },
    [dataContext, setData]
  );
  return (
    <Form name="register" onFinish={handleSubmit}>
      <div className="grid grid-cols-2 gap-1 h-screen bg-[#FFFFFF]">
        <div className="left-content flex items-center justify-center">
          <div className="form flex flex-col gap-10 w-full">
            <b className="text-[#181821] text-[48px] text-center ">
              Registration
            </b>
            <Row justify="center">
              <Col span={12}>
                <AntTextFieldElement
                  formItem={{
                    name: "username",
                    rules: [
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ],
                  }}
                  inputProps={{
                    placeholder: "Username",
                    style: {
                      height: 50,
                      backgroundColor: "#DCE0E3",
                    },
                  }}
                />
                <AntTextFieldElement
                  formItem={{
                    name: "email",
                    rules: [
                      {
                        type: "email",
                        message: "Email is not a value email!",
                      },
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ],
                  }}
                  inputProps={{
                    placeholder: "Email",
                    style: {
                      height: 50,
                      backgroundColor: "#DCE0E3",
                    },
                  }}
                />
                <AntTextFieldElement
                  formItem={{
                    name: "password",
                    rules: [
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                      {
                        max: 8,
                        message: "Ngắn thôi!!",
                      },
                    ],
                  }}
                  inputComponent={
                    <Input.Password
                      placeholder="Password"
                      style={{
                        height: 50,
                        backgroundColor: "#DCE0E3",
                      }}
                    />
                  }
                />
                <AntTextFieldElement
                  formItem={{
                    name: "confirm-password",
                    dependencies: ["password"],
                    rules: [
                      {
                        required: true,
                        message: "Please input your confirm password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          if (getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error(
                              "The new password that you entered do not match!"
                            )
                          );
                        },
                      }),
                    ],
                  }}
                  inputComponent={
                    <Input.Password
                      placeholder="Confirm Password"
                      style={{
                        height: 50,
                        backgroundColor: "#DCE0E3",
                      }}
                    />
                  }
                />
              </Col>
            </Row>
            <Row justify="center">
              <Col span={12}>
                <Button
                  variant="solid"
                  className="w-full !h-[60px]"
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    backgroundColor: "#7051EF",
                    color: "#FFFFFF",
                  }}
                  htmlType="submit"
                >
                  Registration
                </Button>
              </Col>
            </Row>
          </div>
        </div>
        <div className="right-content bg-[#7051EF] rounded-tl-[224px] rounded-bl-[224px] flex items-center justify-center text-[#FFFFFF]">
          <div className="content flex flex-col gap-6 text-center">
            <b className="text-[48px] font-bold">Hello, Welcome!</b>
            <Button size="large" href="/login">
              Login
            </Button>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default Register;
