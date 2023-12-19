import { create } from "zustand";

const useResumeStore = create((set) => ({
  resumeData: {
    firstName: "",
    lastName: "",
    personalDetail: "",
    personalProfileTitle: "",
    photo: "",
    personalProfile: "",
    email: "",
    position: "",
    phone: "",
    address: "",
    postalCode: "",
    city: "",
    drvingLicenses: "",
    gender: "",
    dateOfBirth: "",
    placeOfBirth: "",
    nationality: "",
    maritalStatus: "",
    linkedin: "",
    personalWebsite: "",
    skills: [],
    workExperience: [],
    education: [],
  },
  updateFirstName: (name) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        firstName: name,
      },
    })),

  updatePersonalDetail: (PersonalDetail) =>
    set((state) => ({
      resumeData: { ...state.resumeData, personalDetail: PersonalDetail },
    })),
  updatePersonalProfileTitle: (PersonalProfileTitle) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        personalProfileTitle: PersonalProfileTitle,
      },
    })),
  updateLastName: (name) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        lastName: name,
      },
    })),

  updatePersonalProfile: (PersonalProfile) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        personalProfile: PersonalProfile,
      },
    })),

  updatePhoto: (Photo) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        photo: Photo,
      },
    })),

  updateEmail: (Email) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        email: Email,
      },
    })),

  updatePosition: (Position) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        position: Position,
      },
    })),

  updatePhone: (Phone) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        phone: Phone,
      },
    })),

  updateAddress: (Address) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        address: Address,
      },
    })),

  updatePostalCode: (PostalCode) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        postalCode: PostalCode,
      },
    })),

  updatePostalCode: (PostalCode) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        postalCode: PostalCode,
      },
    })),

  updateCity: (City) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        city: City,
      },
    })),

  updateDrvingLicenses: (DrvingLicenses) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        drvingLicenses: DrvingLicenses,
      },
    })),

  updateGender: (Gender) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        gender: Gender,
      },
    })),

  updateDateOfBirth: (DateOfBirth) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        dateOfBirth: DateOfBirth,
      },
    })),

  updatePlaceOfBirth: (PlaceOfBirth) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        placeOfBirth: PlaceOfBirth,
      },
    })),

  updateNationality: (Nationality) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        nationality: Nationality,
      },
    })),

  updateMaritalStatus: (MaritalStatus) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        maritalStatus: MaritalStatus,
      },
    })),

  updatelinkedin: (Linkedin) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        linkedin: Linkedin,
      },
    })),

  updatePersonalWebsite: (PersonalWebsite) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        personalWebsite: PersonalWebsite,
      },
    })),

  updatePersonalProfile: (PersonalProfile) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        personalProfile: PersonalProfile,
      },
    })),
}));

export default useResumeStore;
