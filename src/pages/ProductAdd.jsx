import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from "yup"
import {Button, FormField, Label} from "semantic-ui-react"
import UDTextInput from '../utilities/customFontControls/UDTextInput'


export default function ProductAdd() {
    const initialValues = {productName:"", price:0}

    const schema = Yup.object({
        productName:Yup.string().required("Ürün adı zorunlu!"),
        price: Yup.number().required("Ürün fiyatı zorunlu!")
    })

    return (
       
  
            <Formik
            initialValues = {initialValues}
            validationSchema = {schema}
            onSubmit={(values) => {
                console.log(values)
            }}
            >
                <Form className="ui form">
                    <UDTextInput name = "productName" placeholder ="Ürün Adı"/>
                {/* <FormField>
                    <Field name = "productName" placeholder ="Ürün Adı"></Field>
                <ErrorMessage name = "productName" render ={ error =>
                    <Label pointing basic color = "red" content = {error}></Label>
                }></ErrorMessage>
                 </FormField> */}
                 <FormField> 
                 <Field name = "price" placeholder ="Ürün Fiyatı"></Field>
                 <ErrorMessage name = "price" render ={ error =>
                    <Label pointing basic color = "red" content = {error}></Label>
                }></ErrorMessage>
                 </FormField>
                 <Button color="green" type = "submit">Ürün Ekle</Button>
                </Form>
            </Formik>
     
    )
}
