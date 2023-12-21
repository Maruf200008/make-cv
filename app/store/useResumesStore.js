import { produce } from "immer";
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
    skillTitle: "",
    educationHeading: "",
    workExperienceHeading: "",
    workExperience: [],
    education: [],
  },
  updateFirstName: (name) =>
    set(
      produce((draft) => {
        draft.resumeData.firstName = name;
      })
    ),

  updatePersonalDetail: (PersonalDetail) =>
    set(
      produce((draft) => {
        draft.resumeData.personalDetail = PersonalDetail;
      })
    ),

  updatePersonalProfileTitle: (PersonalProfileTitle) =>
    set(
      produce((draft) => {
        draft.resumeData.personalProfileTitle = PersonalProfileTitle;
      })
    ),
  updateLastName: (name) =>
    set(
      produce((draft) => {
        draft.resumeData.lastName = name;
      })
    ),

  updatePersonalProfile: (PersonalProfile) =>
    set(
      produce((draft) => {
        draft.resumeData.personalProfile = PersonalProfile;
      })
    ),

  updatePhoto: (Photo) =>
    set(
      produce((draft) => {
        draft.resumeData.photo = Photo;
      })
    ),

  updateEmail: (Email) =>
    set(
      produce((draft) => {
        draft.resumeData.email = Email;
      })
    ),

  updatePosition: (Position) =>
    set(
      produce((draft) => {
        draft.resumeData.position = Position;
      })
    ),

  updatePhone: (Phone) =>
    set(
      produce((draft) => {
        draft.resumeData.phone = Phone;
      })
    ),

  updateAddress: (Address) =>
    set(
      produce((draft) => {
        draft.resumeData.address = Address;
      })
    ),

  updatePostalCode: (PostalCode) =>
    set(
      produce((draft) => {
        draft.resumeData.postalCode = PostalCode;
      })
    ),

  updateCity: (City) =>
    set(
      produce((draft) => {
        draft.resumeData.city = City;
      })
    ),
  updateEducationHeading: (heading) =>
    set(
      produce((draft) => {
        draft.resumeData.educationHeading = heading;
      })
    ),

  updateDrvingLicenses: (DrvingLicenses) =>
    set(
      produce((draft) => {
        draft.resumeData.drvingLicenses = DrvingLicenses;
      })
    ),

  updateGender: (Gender) =>
    set(
      produce((draft) => {
        draft.resumeData.gender = Gender;
      })
    ),

  updateDateOfBirth: (DateOfBirth) =>
    set(
      produce((draft) => {
        draft.resumeData.dateOfBirth = DateOfBirth;
      })
    ),

  updatePlaceOfBirth: (PlaceOfBirth) =>
    set(
      produce((draft) => {
        draft.resumeData.placeOfBirth = PlaceOfBirth;
      })
    ),

  updateNationality: (Nationality) =>
    set(
      produce((draft) => {
        draft.resumeData.nationality = Nationality;
      })
    ),

  updateMaritalStatus: (MaritalStatus) =>
    set(
      produce((draft) => {
        draft.resumeData.maritalStatus = MaritalStatus;
      })
    ),

  updatelinkedin: (Linkedin) =>
    set(
      produce((draft) => {
        draft.resumeData.linkedin = Linkedin;
      })
    ),

  updatePersonalWebsite: (PersonalWebsite) =>
    set(
      produce((draft) => {
        draft.resumeData.personalWebsite = PersonalWebsite;
      })
    ),

  updatePersonalProfile: (PersonalProfile) =>
    set(
      produce((draft) => {
        draft.resumeData.personalProfile = PersonalProfile;
      })
    ),
  updateSkillHeading: (title) =>
    set(
      produce((draft) => {
        draft.resumeData.skillTitle = title;
      })
    ),
  addSkill: (skill) =>
    set(
      produce((draft) => {
        draft.resumeData.skills.push(skill);
      })
    ),
  updateSkillTitle: (skillData) =>
    set(
      produce((draft) => {
        draft?.resumeData?.skills?.map((skill) => {
          if (skill?.id == skillData?.id) {
            skill.skillTitle = skillData?.title;
          }
        });
      })
    ),

  updateSkillLavel: (skillData) =>
    set(
      produce((draft) => {
        draft?.resumeData?.skills?.map((skill) => {
          if (skill?.id == skillData?.id) {
            skill.skillLevel = skillData?.skillLavel;
          }
        });
      })
    ),

  deleteSkill: (id) =>
    set(
      produce((draft) => {
        const filterSkill = draft.resumeData.skills.filter(
          (skill) => skill.id !== id
        );
        draft.resumeData.skills = filterSkill;
      })
    ),

  addExperince: (experince) =>
    set(
      produce((draft) => {
        draft.resumeData.workExperience.push(experince);
      })
    ),

  updateExperinceHeading: (heading) =>
    set(
      produce((draft) => {
        draft.resumeData.workExperienceHeading = heading;
      })
    ),

  UpdateJobTitle: ({ id, title }) =>
    set(
      produce((draft) => {
        draft?.resumeData?.workExperience?.map((experince) => {
          if (experince?.id == id) {
            experince.jobTitle = title;
          }
        });
      })
    ),
  UpdateCompany: ({ id, company }) =>
    set(
      produce((draft) => {
        draft?.resumeData?.workExperience?.map((experince) => {
          if (experince?.id == id) {
            experince.company = company;
          }
        });
      })
    ),

  UpdateLocation: ({ id, location }) =>
    set(
      produce((draft) => {
        draft?.resumeData?.workExperience?.map((experince) => {
          if (experince?.id == id) {
            experince.location = location;
          }
        });
      })
    ),

  UpdateStartDate: ({ id, startDate }) =>
    set(
      produce((draft) => {
        draft?.resumeData?.workExperience?.map((experince) => {
          if (experince?.id == id) {
            experince.startDate = startDate;
          }
        });
      })
    ),

  UpdateEndDate: ({ id, endDate }) =>
    set(
      produce((draft) => {
        draft?.resumeData?.workExperience?.map((experince) => {
          if (experince?.id == id) {
            experince.endDate = endDate;
          }
        });
      })
    ),
  UpdateSummary: ({ id, summary }) =>
    set(
      produce((draft) => {
        draft?.resumeData?.workExperience?.map((experince) => {
          if (experince?.id == id) {
            experince.summary = summary;
          }
        });
      })
    ),

  deleteExperince: (id) =>
    set(
      produce((draft) => {
        const filterSkill = draft.resumeData.workExperience.filter(
          (skill) => skill.id !== id
        );
        draft.resumeData.workExperience = filterSkill;
      })
    ),

  addEudcation: (educationData) =>
    set(
      produce((draft) => {
        draft.resumeData.education.push(educationData);
      })
    ),

  UpdateInstitution: ({ id, institution }) =>
    set(
      produce((draft) => {
        draft?.resumeData?.education?.map((education) => {
          if (education?.id == id) {
            education.institution = institution;
          }
        });
      })
    ),
  UpdateDegree: ({ id, degree }) =>
    set(
      produce((draft) => {
        draft?.resumeData?.education?.map((education) => {
          if (education?.id == id) {
            education.degree = degree;
          }
        });
      })
    ),
  UpdateLoaction: ({ id, loaction }) =>
    set(
      produce((draft) => {
        draft?.resumeData?.education?.map((education) => {
          if (education?.id == id) {
            education.loaction = loaction;
          }
        });
      })
    ),
  UpdateStarDate: ({ id, startDate }) =>
    set(
      produce((draft) => {
        draft?.resumeData?.education?.map((education) => {
          if (education?.id == id) {
            education.startDate = startDate;
          }
        });
      })
    ),

  UpdateEndDate: ({ id, endDate }) =>
    set(
      produce((draft) => {
        draft?.resumeData?.education?.map((education) => {
          if (education?.id == id) {
            education.endDate = endDate;
          }
        });
      })
    ),

  UpdateSummary: ({ id, summary }) =>
    set(
      produce((draft) => {
        draft?.resumeData?.education?.map((education) => {
          if (education?.id == id) {
            education.summary = summary;
          }
        });
      })
    ),

  deleteEducation: (id) =>
    set(
      produce((draft) => {
        const filterSkill = draft.resumeData.education.filter(
          (skill) => skill.id !== id
        );
        draft.resumeData.education = filterSkill;
      })
    ),
}));

export default useResumeStore;
