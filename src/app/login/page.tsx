"use client";
import { DataContext, TUser } from "@/context/DataContext";
import { Button, Col, Form, Input, Row } from "antd";
import Link from "next/link";
import { useCallback, useContext } from "react";
import AntTextFieldElement from "../../components/AntTextFieldElement";

function Login() {
  const context = useContext(DataContext);
  const { data: dataContext } = context || {};
  const [form] = Form.useForm();
  const { validateFields } = form;

  const handleSubmit = useCallback(
    async (data: unknown) => {
      try {
        await validateFields();
        const { username, password } = data as TUser;
        const infoAccount = dataContext?.user.find((ele: TUser) => {
          return ele.username === username && ele.password === password;
        });
        if (!infoAccount) {
          return;
        }
        window.open("/library", "_self");
      } catch (error) {
        console.log(error);
      }
    },
    [dataContext?.user, validateFields]
  );
  return (
    <Form name="login" form={form} onFinish={handleSubmit}>
      <div className="grid grid-cols-2 gap-1 h-screen bg-[#FFFFFF]">
        <div className="left-content bg-[#7051EF] rounded-tr-[224px] rounded-br-[224px] flex items-center justify-center text-[#FFFFFF]">
          <div className="content flex flex-col gap-6 text-center">
            <b className="text-[48px] font-bold">Hello, Welcome!</b>
            <b className="text-[24px]">Don&apos;t have an account?</b>
            <Button size="large" href="/register">
              Register
            </Button>
          </div>
        </div>
        <div className="right-content flex items-center justify-center">
          <div className="form flex flex-col gap-10 w-full">
            <b className="text-[#181821] text-[48px] text-center ">Login</b>
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
                <div className="w-full flex justify-start">
                  <Link
                    href="/forgot-password"
                    className="font-bold text-[18px] !text-[#595959] no-underline"
                  >
                    Forgot Password!
                  </Link>
                </div>
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
                  Login
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default Login;
