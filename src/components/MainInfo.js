import React, { useEffect } from "react";
import Sector from "../utils/JobsSector";
import jobs from "../utils/Jobs";

const MainInfo = ({
  allInfo,
  setAllInfo,
  userMainIncome,
  setUserMainIncome,
  setIsSubmitted,
}) => {
  const sector = jobs[0];

  const changeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setAllInfo({ ...allInfo, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(() => {
    const handleUserMainIncome = () => {
      if (
        (allInfo.userJob === "<---- اختر الوظيفة ---->" ||
          allInfo.userJob === "بدون وظيفة - بدون عمل" ||
          allInfo.userJob === "تاجر اجهزة - سمسار" ||
          allInfo.userJob === "ربة منزل" ||
          allInfo.userJob === "مالك حيازة زراعية") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(0);
      } else if (
        (allInfo.userJob === "معاش تكافل وكرامة" ||
          allInfo.userJob === "معاش تضامن" ||
          allInfo.userJob === "طالب جامعة حكومية" ||
          allInfo.userJob === "طالب جامعة خاصة") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(3000);
      } else if (
        (allInfo.userJob === "معاش حكومي" ||
          allInfo.userJob === "معاش عن قطاع خاص" ||
          allInfo.userJob === "معاش مستحقين" ||
          allInfo.userJob === "صاحب محل صغير" ||
          allInfo.userJob === "صاحب شركة شحن" ||
          allInfo.userJob === "صاحب مكتب مقاولات") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(4000);
      } else if (
        (allInfo.userJob === "مالك حوالات بنكية" ||
          allInfo.userJob === "مالك سيارة اجرة او نقل" ||
          allInfo.userJob === "مالك شهادات بنكية") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(5000);
      } else if (
        (allInfo.userJob === "امين شرطة" ||
          allInfo.userJob === "موظف قطاع خاص" ||
          allInfo.userJob === "يوتيوبر" ||
          allInfo.userJob === "بلوجر" ||
          allInfo.userJob === "صاحب شركة سياحة" ||
          allInfo.userJob === "صاحب شركة نقل" ||
          allInfo.userJob === "مالك عقارات ومحلات") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(6000);
      } else if (
        ((allInfo.userJobSector === "القطاع الحكومي" &&
          (allInfo.userJob === "موظف ادوية" ||
            allInfo.userJob === "موظف حكومي" ||
            allInfo.userJob === "مدرس حكومي" ||
            allInfo.userJob === "موظف شركة تأمين")) ||
          (allInfo.userJobSector === "القطاع الخاص" &&
            allInfo.userJob === "عامل") ||
          allInfo.userJob === "محامى" ||
          allInfo.userJob === "صحفي" ||
          allInfo.userJob === "تاجر" ||
          allInfo.userJob === "تاجر اعمال فنية" ||
          allInfo.userJob === "تاجر تحف" ||
          allInfo.userJob === "تاجر معادن نفيسة" ||
          allInfo.userJob === "حداد" ||
          allInfo.userJob === "سمسار" ||
          allInfo.userJob === "نقاش" ||
          allInfo.userJob === "نجار" ||
          allInfo.userJob === "عامل بناء" ||
          allInfo.userJob === "صاحب شركة صغيرة" ||
          allInfo.userJob === "سائق") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(7000);
      } else if (
        (allInfo.userJob === "مدرس بمدرسة خاصة" ||
          allInfo.userJob === "اعلامي") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(8000);
      } else if (
        ((allInfo.userJobSector === "القطاع الحكومي" &&
          (allInfo.userJob === "موظف اتصالات" ||
            allInfo.userJob === "رئيس قسم" ||
            allInfo.userJob === "موظف بالكهرباء")) ||
          (allInfo.userJobSector === "القطاع الخاص" &&
            (allInfo.userJob === "موظف اتصالات" ||
              allInfo.userJob === "موظف ادوية" ||
              allInfo.userJob === "رئيس قسم" ||
              allInfo.userJob === "مشرف" ||
              allInfo.userJob === "موظف الغرفة التجارية الامريكية")) ||
          allInfo.userJob === "صف ضابط قوات مسلحة" ||
          allInfo.userJob === "معاش قوات مسلحة" ||
          allInfo.userJob === "لاعب كرة" ||
          allInfo.userJob === "صاحب شركة متوسطة") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(10000);
      } else if (
        ((allInfo.userJobSector === "القطاع الحكومي" &&
          (allInfo.userJob === "موظف بترول" ||
            allInfo.userJob === "موظف بنوك" ||
            allInfo.userJob === "مامور ضرائب" ||
            allInfo.userJob === "موظف طيران" ||
            allInfo.userJob === "موظف هيئة قناة السويس")) ||
          (allInfo.userJobSector === "القطاع الخاص" &&
            (allInfo.userJob === "موظف بترول" ||
              allInfo.userJob === "موظف بنوك" ||
              allInfo.userJob === "مدير" ||
              allInfo.userJob === "موظف طيران")) ||
          allInfo.userJob === "ضابط قوات مسلحة (من ملازم الي مقدم)" ||
          allInfo.userJob === "ضابط شرطة (من ملازم الي مقدم)" ||
          allInfo.userJob === "مهندس" ||
          allInfo.userJob === "استاذ جامعى" ||
          allInfo.userJob === "صيدلى" ||
          allInfo.userJob === "المسئولين البارزين بالاحزاب السياسية" ||
          allInfo.userJob === "صاحب شركة كبيرة") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(15000);
      } else if (
        (allInfo.userJob === "كبار ضباط القوات مسلحة (اعلي من مقدم)" ||
          allInfo.userJob === "كبار ضباط الشرطة (اعلي من مقدم)" ||
          allInfo.userJob === "طبيب" ||
          allInfo.userJob === "رئيس قطاع" ||
          allInfo.userJob === "مضيف جوي" ||
          allInfo.userJob === "عضو الغرفة التجارية الامريكية") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(20000);
      } else if (
        (allInfo.userJob === "قبطان" ||
          allInfo.userJob === "طيار" ||
          allInfo.userJob === "عضو هيئة قضائية (معاون الي رئيس نيابة )" ||
          allInfo.userJob === "ممثل") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(25000);
      } else if (
        (allInfo.userJob === "كبار المسئولين العسكريين ( جيش وشرطة )" ||
          allInfo.userJob === "قاضي / مستشار") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(30000);
      } else if (
        allInfo.userJob === "كبار المسئولين بالجهات القضائية" &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(40000);
      } else if (
        (allInfo.userJob === "<---- اختر الوظيفة ---->" ||
          allInfo.userJob === "بدون وظيفة - بدون عمل" ||
          allInfo.userJob === "تاجر اجهزة - سمسار" ||
          allInfo.userJob === "ربة منزل" ||
          allInfo.userJob === "مالك حيازة زراعية") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(0);
      } else if (
        (allInfo.userJob === "طالب جامعة حكومية" ||
          allInfo.userJob === "طالب جامعة خاصة") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(3000);
      } else if (
        (allInfo.userJob === "معاش تكافل وكرامة" ||
          allInfo.userJob === "معاش تضامن") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(4000);
      } else if (
        (allInfo.userJob === "معاش حكومي" ||
          allInfo.userJob === "معاش عن قطاع خاص" ||
          allInfo.userJob === "معاش مستحقين" ||
          allInfo.userJob === "صاحب محل صغير" ||
          allInfo.userJob === "صاحب شركة شحن" ||
          allInfo.userJob === "صاحب مكتب مقاولات") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(6000);
      } else if (
        allInfo.userJob === "امين شرطة" &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(7000);
      } else if (
        (allInfo.userJob === "مالك حوالات بنكية" ||
          allInfo.userJob === "مالك سيارة اجرة او نقل") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(7500);
      } else if (
        ((allInfo.userJobSector === "القطاع الحكومي" &&
          (allInfo.userJob === "موظف ادوية" ||
            allInfo.userJob === "مدرس حكومي" ||
            allInfo.userJob === "موظف شركة تأمين")) ||
          (allInfo.userJobSector === "القطاع الخاص" &&
            allInfo.userJob === "عامل") ||
          allInfo.userJob === "صحفي" ||
          allInfo.userJob === "صاحب شركة صغيرة") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(8500);
      } else if (
        (allInfo.userJob === "صاحب شركة سياحة" ||
          allInfo.userJob === "صاحب شركة نقل") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(9000);
      } else if (
        (allInfo.userJob === "موظف قطاع خاص" ||
          allInfo.userJob === "مالك شهادات بنكية") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(10000);
      } else if (
        allInfo.userJob === "مالك عقارات ومحلات" &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(10500);
      } else if (
        allInfo.userJob === "موظف حكومي" &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(11000);
      } else if (
        allInfo.userJob === "اعلامي" &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(11500);
      } else if (
        (allInfo.userJob === "يوتيوبر" || allInfo.userJob === "بلوجر") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(13000);
      } else if (
        (allInfo.userJob === "محامى" ||
          allInfo.userJob === "تاجر" ||
          allInfo.userJob === "تاجر اعمال فنية" ||
          allInfo.userJob === "تاجر تحف" ||
          allInfo.userJob === "تاجر معادن نفيسة" ||
          allInfo.userJob === "حداد" ||
          allInfo.userJob === "سمسار" ||
          allInfo.userJob === "نقاش" ||
          allInfo.userJob === "نجار" ||
          allInfo.userJob === "عامل بناء" ||
          allInfo.userJob === "سائق") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(13500);
      } else if (
        allInfo.userJob === "مدرس بمدرسة خاصة" &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(14000);
      } else if (
        ((allInfo.userJobSector === "القطاع الحكومي" &&
          (allInfo.userJob === "موظف اتصالات" ||
            allInfo.userJob === "رئيس قسم" ||
            allInfo.userJob === "موظف بالكهرباء")) ||
          (allInfo.userJobSector === "القطاع الخاص" &&
            (allInfo.userJob === "موظف اتصالات" ||
              allInfo.userJob === "موظف ادوية" ||
              allInfo.userJob === "رئيس قسم" ||
              allInfo.userJob === "مشرف")) ||
          allInfo.userJob === "صف ضابط قوات مسلحة" ||
          allInfo.userJob === "معاش قوات مسلحة" ||
          allInfo.userJob === "لاعب كرة" ||
          allInfo.userJob === "صاحب شركة متوسطة") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(15000);
      } else if (
        allInfo.userJob === "مامور ضرائب" &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(17500);
      } else if (
        ((allInfo.userJobSector === "القطاع الحكومي" &&
          (allInfo.userJob === "موظف بنوك" ||
            allInfo.userJob === "موظف طيران")) ||
          (allInfo.userJobSector === "القطاع الخاص" &&
            (allInfo.userJob === "موظف بنوك" ||
              allInfo.userJob === "موظف طيران")) ||
          allInfo.userJob === "ضابط قوات مسلحة (من ملازم الي مقدم)" ||
          allInfo.userJob === "ضابط شرطة (من ملازم الي مقدم)" ||
          allInfo.userJob === "المسئولين البارزين بالاحزاب السياسية" ||
          allInfo.userJob === "صاحب شركة كبيرة") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(20000);
      } else if (
        ((allInfo.userJobSector === "القطاع الحكومي" &&
          (allInfo.userJob === "موظف بترول" ||
            allInfo.userJob === "موظف هيئة قناة السويس")) ||
          (allInfo.userJobSector === "القطاع الخاص" &&
            (allInfo.userJob === "موظف بترول" || allInfo.userJob === "مدير")) ||
          allInfo.userJob === "مهندس" ||
          allInfo.userJob === "استاذ جامعى" ||
          allInfo.userJob === "صيدلى") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(22500);
      } else if (
        (allInfo.userJob === "كبار ضباط القوات مسلحة (اعلي من مقدم)" ||
          allInfo.userJob === "كبار ضباط الشرطة (اعلي من مقدم)" ||
          allInfo.userJob === "رئيس قطاع") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(25000);
      } else if (
        (allInfo.userJob === "موظف الغرفة التجارية الامريكية" ||
          allInfo.userJob === "مضيف جوي" ||
          allInfo.userJob === "عضو هيئة قضائية (معاون الي رئيس نيابة )" ||
          allInfo.userJob === "ممثل") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(30000);
      } else if (
        (allInfo.userJob === "قبطان" ||
          allInfo.userJob === "كبار المسئولين العسكريين ( جيش وشرطة )" ||
          allInfo.userJob === "طبيب" ||
          allInfo.userJob === "قاضي / مستشار") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(35000);
      } else if (
        allInfo.userJob === "طيار" &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(37500);
      } else if (
        allInfo.userJob === "كبار المسئولين بالجهات القضائية" &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(50000);
      } else if (
        allInfo.userJob === "عضو الغرفة التجارية الامريكية" &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(60000);
      } else if (
        (allInfo.userJob === "<---- اختر الوظيفة ---->" ||
          allInfo.userJob === "ربة منزل" ||
          allInfo.userJob === "بدون وظيفة - بدون عمل" ||
          allInfo.userJob === "تاجر اجهزة - سمسار" ||
          allInfo.userJob === "مالك حيازة زراعية") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(0);
      } else if (
        (allInfo.userJob === "طالب جامعة حكومية" ||
          allInfo.userJob === "طالب جامعة خاصة") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(3000);
      } else if (
        (allInfo.userJob === "معاش تكافل وكرامة" ||
          allInfo.userJob === "معاش تضامن") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(5000);
      } else if (
        (allInfo.userJob === "معاش حكومي" ||
          allInfo.userJob === "معاش عن قطاع خاص" ||
          allInfo.userJob === "معاش مستحقين" ||
          allInfo.userJob === "صاحب محل صغير" ||
          allInfo.userJob === "صاحب شركة شحن" ||
          allInfo.userJob === "صاحب مكتب مقاولات" ||
          allInfo.userJob === "امين شرطة") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(8000);
      } else if (
        ((allInfo.userJobSector === "القطاع الحكومي" &&
          (allInfo.userJob === "موظف ادوية" ||
            allInfo.userJob === "مدرس حكومي" ||
            allInfo.userJob === "موظف شركة تأمين")) ||
          (allInfo.userJobSector === "القطاع الخاص" &&
            allInfo.userJob === "عامل") ||
          allInfo.userJob === "صحفي" ||
          allInfo.userJob === "مالك حوالات بنكية" ||
          allInfo.userJob === "مالك سيارة اجرة او نقل" ||
          allInfo.userJob === "صاحب شركة صغيرة") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(10000);
      } else if (
        (allInfo.userJob === "صاحب شركة سياحة" ||
          allInfo.userJob === "صاحب شركة نقل") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(12000);
      } else if (
        (allInfo.userJob === "موظف حكومي" ||
          allInfo.userJob === "موظف قطاع خاص" ||
          allInfo.userJob === "اعلامي" ||
          allInfo.userJob === "مالك شهادات بنكية" ||
          allInfo.userJob === "مالك عقارات ومحلات") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(15000);
      } else if (
        ((allInfo.userJobSector === "القطاع الحكومي" &&
          (allInfo.userJob === "موظف اتصالات" ||
            allInfo.userJob === "رئيس قسم" ||
            allInfo.userJob === "موظف بالكهرباء" ||
            allInfo.userJob === "مامور ضرائب")) ||
          (allInfo.userJobSector === "القطاع الخاص" &&
            (allInfo.userJob === "مدرس بمدرسة خاصة" ||
              allInfo.userJob === "موظف اتصالات" ||
              allInfo.userJob === "موظف ادوية" ||
              allInfo.userJob === "رئيس قسم" ||
              allInfo.userJob === "مشرف")) ||
          allInfo.userJob === "يوتيوبر" ||
          allInfo.userJob === "بلوجر" ||
          allInfo.userJob === "محامى" ||
          allInfo.userJob === "تاجر" ||
          allInfo.userJob === "تاجر اعمال فنية" ||
          allInfo.userJob === "تاجر تحف" ||
          allInfo.userJob === "تاجر معادن نفيسة" ||
          allInfo.userJob === "حداد" ||
          allInfo.userJob === "سمسار" ||
          allInfo.userJob === "نقاش" ||
          allInfo.userJob === "نجار" ||
          allInfo.userJob === "عامل بناء" ||
          allInfo.userJob === "سائق" ||
          allInfo.userJob === "صف ضابط قوات مسلحة" ||
          allInfo.userJob === "لاعب كرة" ||
          allInfo.userJob === "صاحب شركة متوسطة") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(20000);
      } else if (
        ((allInfo.userJobSector === "القطاع الحكومي" &&
          (allInfo.userJob === "موظف بنوك" ||
            allInfo.userJob === "موظف طيران")) ||
          (allInfo.userJobSector === "القطاع الخاص" &&
            (allInfo.userJob === "موظف بنوك" ||
              allInfo.userJob === "موظف طيران")) ||
          allInfo.userJob === "معاش قوات مسلحة" ||
          allInfo.userJob === "ضابط قوات مسلحة (من ملازم الي مقدم)" ||
          allInfo.userJob === "ضابط شرطة (من ملازم الي مقدم)" ||
          allInfo.userJob === "المسئولين البارزين بالاحزاب السياسية" ||
          allInfo.userJob === "صاحب شركة كبيرة") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(25000);
      } else if (
        ((allInfo.userJobSector === "القطاع الحكومي" &&
          (allInfo.userJob === "موظف بترول" ||
            allInfo.userJob === "موظف هيئة قناة السويس")) ||
          (allInfo.userJobSector === "القطاع الخاص" &&
            (allInfo.userJob === "مدير" || allInfo.userJob === "موظف بترول")) ||
          allInfo.userJob === "مهندس" ||
          allInfo.userJob === "استاذ جامعى" ||
          allInfo.userJob === "صيدلى" ||
          allInfo.userJob === "كبار ضباط القوات مسلحة (اعلي من مقدم)" ||
          allInfo.userJob === "كبار ضباط الشرطة (اعلي من مقدم)") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(30000);
      } else if (
        (allInfo.userJob === "عضو هيئة قضائية (معاون الي رئيس نيابة )" ||
          allInfo.userJob === "ممثل") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(35000);
      } else if (
        allInfo.userJob === "مضيف جوي" ||
        allInfo.userJob === "رئيس قطاع" ||
        (allInfo.userJob === "قاضي / مستشار" &&
          allInfo.userExperience === "اكثر من 5 سنوات")
      ) {
        setUserMainIncome(40000);
      } else if (
        (allInfo.userJob === "موظف الغرفة التجارية الامريكية" ||
          allInfo.userJob === "طبيب" ||
          allInfo.userJob === "قبطان" ||
          allInfo.userJob === "طيار") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(50000);
      } else if (
        (allInfo.userJob === "كبار المسئولين العسكريين ( جيش وشرطة )" ||
          allInfo.userJob === "كبار المسئولين بالجهات القضائية") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(60000);
      } else if (
        allInfo.userJob === "عضو الغرفة التجارية الامريكية" &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(100000);
      }
    };
    handleUserMainIncome();
  }, [
    allInfo.userJob,
    allInfo.userExperience,
    setUserMainIncome,
    allInfo.userJobSector,
  ]);
  return (
    <div>
      <div className="bg-violet-900 flex justify-center rounded-lg shadow-md shadow-black">
        <div className="p-1.5 w-full m-2.5 mb-2.5 bg-violet-950 text-center rounded-lg shadow-xl border-2 border-dashed">
          <div className="p-1.5 bg-gray-50">
            <form dir="rtl" className="p-2.5" onSubmit={onSubmitHandler}>
              <div className="flex justify-between my-2.5">
                <div className="flex flex-col ">
                  <label htmlFor="sector" className="font-bold p-1 text-right">
                    القطاع <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="sector"
                    name="userJobSector"
                    className="w-80 p-1 border rounded"
                    onChange={changeHandler}
                    defaultValue={""}
                    required
                  >
                    <option disabled></option>
                    {Sector.map((sector) => (
                      <option key={sector}>{sector}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="job" className="font-bold p-1 text-right">
                    الوظيفة <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="job"
                    name="userJob"
                    className="w-80 p-1 border rounded"
                    onChange={changeHandler}
                    defaultValue={""}
                    required
                  >
                    <option disabled></option>
                    {allInfo.userJobSector === "العسكريين"
                      ? sector["القطاع العسكري"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "القطاع الحكومي"
                      ? sector["القطاع الحكومي"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "القطاع الخاص"
                      ? sector["القطاع الخاص"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "المهن المستقلة"
                      ? sector["قطاع المهن المستقلة"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "القضائيين"
                      ? sector["قطاع القضاء"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "المعاشات"
                      ? sector["قطاع المعاشات"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "المشاهير"
                      ? sector["قطاع المشاهير"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "الطلبة"
                      ? sector["قطاع الطلاب"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "الحرفيين"
                      ? sector["قطاع الحرفيين"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "اصحاب الانشطة"
                      ? sector["قطاع اصحاب الانشطة"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "مصادر دخل اخري"
                      ? sector["قطاع مصادر دخل اخرى"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "وظائف رفض"
                      ? sector["قطاع وظائف الرفض"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : null}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="experience"
                    className="font-bold p-1 text-right"
                  >
                    سنوات الخبرة <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="experience"
                    name="userExperience"
                    className="w-80 p-1 border rounded"
                    onChange={changeHandler}
                    defaultValue={""}
                    required
                  >
                    <option disabled></option>
                    <option>اقل من 3 سنوات</option>
                    <option>من 3 سنوات الي 5 سنوات</option>
                    <option>اكثر من 5 سنوات</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-between my-2.5">
                <div className="flex flex-col">
                  <label className="font-bold p-1 text-right">
                    قيمه دخل العميل <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    className="w-80 p-1 border rounded"
                    value={userMainIncome}
                    disabled
                  />
                </div>
                <div className="flex flex-col ">
                  <label
                    className="font-bold p-1 text-right"
                    htmlFor="subIncome"
                  >
                    فرق الدخل في حالة وجود أوراق{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="subIncome"
                    type="number"
                    name="userSubIncome"
                    className="w-80 p-1 border rounded"
                    onChange={changeHandler}
                    required
                    min={0}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-bold p-1 text-right" htmlFor="charges">
                    الاعباء الشهرية <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="charges"
                    type="number"
                    name="userMonthlyCharges"
                    className="w-80 p-1 border rounded"
                    onChange={changeHandler}
                    required
                    min={0}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="font-bold p-1 text-right" htmlFor="class">
                  تصنيف العميل <span className="text-red-600">*</span>
                </label>
                <select
                  id="class"
                  name="userClass"
                  className="w-80 p-1 border rounded"
                  onChange={changeHandler}
                  defaultValue={""}
                  required
                >
                  <option disabled></option>
                  <option>A</option>
                  <option>B</option>
                </select>
              </div>
              <div>
                <button
                  type="submmit"
                  className="p-1.5 bg-violet-900 text-white font-bold rounded shadow-md shadow-black"
                >
                  حساب الحد الائتماني
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
