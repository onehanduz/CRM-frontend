import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Mijoz qo`shish</h1>
                    <p className="text-medium-emphasis">Iltimos, xato kiritmang!</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Ism" autoComplete="firstname" />
                      <CFormInput placeholder="Familya" autoComplete="Lastname" />
                      <CFormInput placeholder="Otasining ismi" autoComplete="Middlename" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>Tug`ilgan kuni</CInputGroupText>
                      <CFormInput type="date" placeholder="Tug`ilgan kun" autoComplete="Birthday" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CFormInput placeholder="Pasport seriya raqami" autoComplete="passport" />
                      <CFormInput
                        type="date"
                        placeholder="Pasport berilgan vaqt"
                        autoComplete="given_date"
                      />
                    </CInputGroup>
                    <CInputGroup>
                      <div className="mb-3 col-lg">
                        <CFormLabel htmlFor="telraqam1">Raqami</CFormLabel>
                        <CFormInput
                          placeholder="Raqami"
                          autoComplete="phone_number2"
                          defaultValue={'+998'}
                          id="telraqam"
                        />
                      </div>
                      <div className="mb-3 col-lg">
                        <CFormLabel htmlFor="telraqam1">Qo`shimcha raqam</CFormLabel>
                        <CFormInput
                          placeholder="Qo`shimcha raqam"
                          autoComplete="phone_number2"
                          defaultValue={'+998'}
                          id="telraqam1"
                        />
                      </div>
                      <div className="mb-3 col-lg">
                        <CFormLabel htmlFor="telraqam2">Ota-ona raqami</CFormLabel>
                        <CFormInput
                          placeholder="Ota-ona raqami"
                          autoComplete="phone_number2"
                          defaultValue={'+998'}
                          id="telraqam2"
                        />
                      </div>
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4">
                          Qo`shish
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
