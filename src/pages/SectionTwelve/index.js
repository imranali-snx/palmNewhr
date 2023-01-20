import React from "react";
import { Button, Checkbox, Form, Input, Row, Col, InputNumber } from "antd";
import "../SectionTwelve/style.css";

export default function index() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row justify="space-around" align="middle" className="r9">
      <Col className="r1 " xs={24} sm={24} md={15} lg={12} xl={11}>
        <div>
          <p className="r2">
            Ready to Empower your Teams with the Best HRMS Available?
          </p>
          <p className="r3">
            <strong className="st-css">palm.hr's </strong>
            sophisticated blend of AI technology and top-notch customer service
            offers a convenient approach for all your HR needs.
          </p>
          <p className="r33">
            Our cloud-based software is designed to make managing employees more
            straightforward than ever with automated processes, from onboarding
            to offboarding, so you can get back to running things faster.
          </p>
        </div>
      </Col>
      <Col className="r10 " xs={24} xl={10} md={15} lg={10} sm={24}>
        <Form
          className="r8"
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Row>
            <Form.Item
              layout="inline"
              name="First Name"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}>
              <Input className="r4" placeholder="First Name" />
            </Form.Item>
            <Form.Item
              layout="inline"
              name="Last Name"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}>
              <Input placeholder="Last Name" className="r4" />
            </Form.Item>
          </Row>
          <Form.Item
            name={["user", "email"]}
            rules={[
              {
                type: "email",
              },
            ]}>
            <Input className="r5" placeholder="Email" />
          </Form.Item>

          <Row>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}>
              <Input
                // addonBefore={prefixSelector}

                className="r4"
                placeholder="Phone No."
              />
            </Form.Item>

            <Form.Item
              name="Company Name"
              rules={[
                {
                  required: true,
                  message: "Please input your Company Name!",
                },
              ]}>
              <Input className="r4" placeholder="Company Name" />
            </Form.Item>
          </Row>

          <Row>
            <Form.Item
              layout="inline"
              name="Job Title"
              rules={[
                {
                  required: true,
                  message: "Please input your Job Title!",
                },
              ]}>
              <Input placeholder="Job Title" className="r4" />
            </Form.Item>

            <Form.Item
              name="InputNumber of employees"
              rules={[
                {
                  required: true,
                  message: "Please input your No of employees!",
                },
              ]}>
              <InputNumber
                className="r4"
                placeholder="No. of Employees"
                min={1}
                max={100}
              />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item
              layout="inline"
              name="Country"
              rules={[
                {
                  required: true,
                  message: "Please input your Country!",
                },
              ]}>
              <Input placeholder="Country" className="r4" />
            </Form.Item>

            <Form.Item
              name="Feature of interest"
              rules={[
                {
                  required: true,
                  message: "Please input your Feature of interest!",
                },
              ]}>
              <Input placeholder="Feature of interest" className="r4" />
            </Form.Item>
            <div className="r6">
              <Button htmlType="submit" className="zain-1" block>
                <span className="r7"> Book a Demo</span>
              </Button>
            </div>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}
