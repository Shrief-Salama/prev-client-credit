import React, { useEffect } from "react";
import Sector from "../utils/JobsSector";
import jobs from "../utils/Jobs";
import jobsKind from "../utils/JobsKind";

const MainInfo = ({
  allInfo,
  setAllInfo,
  userMainIncome,
  setUserMainIncome,
  setIsSubmitted,
}) => {
  const kinds = Sector[0];
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
        (allInfo.userJob === "خفير" ||
          allInfo.userJob === "طالب جامعة حكومية" ||
          allInfo.userJob === "طالب جامعة خاصة" ||
          allInfo.userJob === "مزارع" ||
          allInfo.userJob === "معاش تضامن" ||
          allInfo.userJob === "معاش تكافل وكرامة") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(3000);
      } else if (
        (allInfo.userJob === "معاش حكومي" ||
          allInfo.userJob === "معاش عن قطاع خاص" ||
          allInfo.userJob === "معاش مستحقين" ||
          allInfo.userJob === "معاون امن") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(4000);
      } else if (
        (allInfo.userJob === "فني ماكينات زراعية" ||
          allInfo.userJob === "مالك حوالات بنكية" ||
          allInfo.userJob === "مالك سيارة اجرة او نقل" ||
          allInfo.userJob === "مالك شهادات بنكية" ||
          allInfo.userJob === "مهندس ري" ||
          allInfo.userJob === "مهندس زراعي") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(5000);
      } else if (
        (allInfo.userJob === "بلوجر" ||
          allInfo.userJob === "مالك عقارات ومحلات" ||
          allInfo.userJob === "يوتيوبر") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(6000);
      } else if (
        (allInfo.userJob === "استورجي" ||
          allInfo.userJob === "ترزي" ||
          allInfo.userJob === "حداد" ||
          allInfo.userJob === "سائق" ||
          allInfo.userJob === "سروجي سيارات" ||
          allInfo.userJob === "سكرتير" ||
          allInfo.userJob === "سمسار" ||
          allInfo.userJob === "صاحب حيازة زراعية" ||
          allInfo.userJob === "صحفي" ||
          allInfo.userJob === "عامل بناء" ||
          allInfo.userJob === "عامل خدمات" ||
          allInfo.userJob === "عامل خدمات فندقية" ||
          allInfo.userJob === "عريف" ||
          allInfo.userJob === "عفشجي" ||
          allInfo.userJob === "فني الوميتال" ||
          allInfo.userJob === "فني دش" ||
          allInfo.userJob === "فني سيراميك" ||
          allInfo.userJob === "فني صيانة اجهزة منزلية" ||
          allInfo.userJob === "فني كاميرات" ||
          allInfo.userJob === "فني كمبيوتر" ||
          allInfo.userJob === "فني محارة وجبس" ||
          allInfo.userJob === "كهربائي سيارات" ||
          allInfo.userJob === "محامى جزئي" ||
          allInfo.userJob === "مسئول امن" ||
          allInfo.userJob === "مسئول انتاج" ||
          allInfo.userJob === "مسئول جوده" ||
          allInfo.userJob === "منظم رحلات" ||
          allInfo.userJob === "ميكانيكي" ||
          allInfo.userJob === "صاحب شركة صغيره" ||
          allInfo.userJob === "نقاش") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(7000);
      } else if (
        (allInfo.userJob === "اخصائي اجتماعي" ||
          allInfo.userJob === "اعلامي" ||
          allInfo.userJob === "رقيب" ||
          allInfo.userJob === "سباك" ||
          allInfo.userJob === "عامل مصعد" ||
          allInfo.userJob === "فني تكييف" ||
          allInfo.userJob === "فني صيانة" ||
          allInfo.userJob === "كهربائي" ||
          allInfo.userJob === "لايف جارد" ||
          allInfo.userJob === "مامور جمرك" ||
          allInfo.userJob === "مترجم" ||
          allInfo.userJob === "محامي ابتدائي" ||
          allInfo.userJob === "محامي استئناف" ||
          allInfo.userJob === "محامي نقض" ||
          allInfo.userJob === "مدخل بيانات" ||
          allInfo.userJob === "مدرس ابتدائي" ||
          allInfo.userJob === "مدرس اعدادي" ||
          allInfo.userJob === "مدرس مواد فنية وانشطة " ||
          allInfo.userJob === "مرشد سياحي" ||
          allInfo.userJob === "مساعد شرطة" ||
          allInfo.userJob === "مساعد شيف" ||
          allInfo.userJob === "مسؤول خدمة عملاء" ||
          allInfo.userJob === "مسئول تحصيل" ||
          allInfo.userJob === "مسئول جمارك" ||
          allInfo.userJob === "مسئول حجز" ||
          allInfo.userJob === "مشرف اداري" ||
          allInfo.userJob === "مضيف ارضي" ||
          allInfo.userJob === "معاش شرطة" ||
          allInfo.userJob === "مهندس تكنولوجيا" ||
          allInfo.userJob === "موظف استقبال" ||
          allInfo.userJob === "نجار") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(8000);
      } else if (
        (allInfo.userJob === "امين شرطة" ||
          allInfo.userJob === "رقيب اول" ||
          allInfo.userJob === "مدرس ثانوي") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(9000);
      } else if (
        (allInfo.userJob === "رئيس الصيانه" ||
          allInfo.userJob === "صاحب مزرعة مواشي" ||
          allInfo.userJob === "فني اشعة" ||
          allInfo.userJob === "فني تحاليل" ||
          allInfo.userJob === "فني تخدير" ||
          allInfo.userJob === "فني تعقيم" ||
          allInfo.userJob === "فني شبكات" ||
          allInfo.userJob === "لاعب كرة " ||
          allInfo.userJob === "مأمور ضرائب" ||
          allInfo.userJob === "محاسب قانوني" ||
          allInfo.userJob === "محلل بيانات" ||
          allInfo.userJob === "مدير الحجز" ||
          allInfo.userJob === "مساعد" ||
          allInfo.userJob === "مساعد مدرس" ||
          allInfo.userJob === "مسئول" ||
          allInfo.userJob === "مسئول اداري" ||
          allInfo.userJob === "مسئول مبيعات" ||
          allInfo.userJob === "مضيف جوي" ||
          allInfo.userJob === "معاش قوات مسلحة" ||
          allInfo.userJob === "موجه تعليمي" ||
          allInfo.userJob === "صاحب شركة متوسطة" ||
          allInfo.userJob === "موظف امن") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(10000);
      } else if (
        (allInfo.userJob === "طبيب" ||
          allInfo.userJob === "مدير الانظمة" ||
          allInfo.userJob === "مدير خدمات الضيوف" ||
          allInfo.userJob === "مراجع" ||
          allInfo.userJob === "مساعد اول" ||
          allInfo.userJob === "مشرف" ||
          allInfo.userJob === "مصمم برامج" ||
          allInfo.userJob === "معيد (ماجيستير" ||
          allInfo.userJob === "ممرض" ||
          allInfo.userJob === "مهندس  صيانة") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(12000);
      } else if (
        (allInfo.userJob === "مبرمج" ||
          allInfo.userJob === "ملازم" ||
          allInfo.userJob === "ملازم بحري" ||
          allInfo.userJob === "ملازم طيار") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(14000);
      } else if (
        (allInfo.userJob === "استاذ جامعى" ||
          allInfo.userJob === "استاذ جامعي (دكتوراه)" ||
          allInfo.userJob === "سكرتيرة" ||
          allInfo.userJob === "سياسي" ||
          allInfo.userJob === "شيف تنفيذي" ||
          allInfo.userJob === "صيدلى" ||
          allInfo.userJob === "محاسب" ||
          allInfo.userJob === "مدير اغذية و مشروبات" ||
          allInfo.userJob === "مدير العمليات" ||
          allInfo.userJob === "مدير الموارد البشرية" ||
          allInfo.userJob === "مدير امن" ||
          allInfo.userJob === "مدير تسويق" ||
          allInfo.userJob === "مدير مبيعات" ||
          allInfo.userJob === "مدير مشتريات" ||
          allInfo.userJob === "مدير وكالة سفر" ||
          allInfo.userJob === "معاون نيابة" ||
          allInfo.userJob === "ملازم اول" ||
          allInfo.userJob === "ملازم اول بحري" ||
          allInfo.userJob === "ملازم اول طيار" ||
          allInfo.userJob === "مهندس" ||
          allInfo.userJob === "صاحب شركة كبيره" ||
          allInfo.userJob === "مهندس صيانة") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(15000);
      } else if (
        (allInfo.userJob === "نقيب" ||
          allInfo.userJob === "نقيب بحري" ||
          allInfo.userJob === "نقيب طيار") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(17000);
      } else if (
        (allInfo.userJob === "رائد" ||
          allInfo.userJob === "رائد بحري" ||
          allInfo.userJob === "رائد طيار" ||
          allInfo.userJob === "وكيل نيابة") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(18000);
      } else if (
        (allInfo.userJob === "رئيس نيابة" ||
          allInfo.userJob === "صيدلي" ||
          allInfo.userJob === "طبيب اخصائي" ||
          allInfo.userJob === "طبيب استشاري" ||
          allInfo.userJob === "طبيب تخدير" ||
          allInfo.userJob === "طبيب ممارس" ||
          allInfo.userJob === "محامي شئون قانونية " ||
          allInfo.userJob === "مدير اشعة" ||
          allInfo.userJob === "مدير تحاليل" ||
          allInfo.userJob === "مدير عمليات" ||
          allInfo.userJob === "مدير مالي" ||
          allInfo.userJob === "مقدم" ||
          allInfo.userJob === "مقدم بحري" ||
          allInfo.userJob === "مقدم طيار" ||
          allInfo.userJob === "مهندس بترول" ||
          allInfo.userJob === "نائب مدير الفندق") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(18000);
      } else if (
        allInfo.userJob === "رئيس قسم" &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(21000);
      } else if (
        (allInfo.userJob === "عقيد" ||
          allInfo.userJob === "عقيد بحري" ||
          allInfo.userJob === "عقيد طيار") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(22000);
      } else if (
        allInfo.userJob === "مدير" &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(23000);
      } else if (
        (allInfo.userJob === "رئيس قطاع" ||
          allInfo.userJob === "عميد" ||
          allInfo.userJob === "عميد بحري" ||
          allInfo.userJob === "عميد طيار" ||
          allInfo.userJob === "ممثل") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(25000);
      } else if (
        (allInfo.userJob === "لواء" ||
          allInfo.userJob === "لواء بحري" ||
          allInfo.userJob === "لواء طيار") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(27000);
      } else if (
        (allInfo.userJob === "طيار" ||
          allInfo.userJob === "قاضي" ||
          allInfo.userJob === "مدير بنك" ||
          allInfo.userJob === "مدير فندق" ||
          allInfo.userJob === "مستشار") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(30000);
      } else if (
        allInfo.userJob === "رئيس محكمة" &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(40000);
      } else if (
        (allInfo.userJob === "فريق" ||
          allInfo.userJob === "فريق اول" ||
          allInfo.userJob === "فريق اول بحري" ||
          allInfo.userJob === "فريق اول طيار" ||
          allInfo.userJob === "فريق بحري" ||
          allInfo.userJob === "فريق طيار" ||
          allInfo.userJob === "مالك" ||
          allInfo.userJob === "مشير") &&
        allInfo.userExperience === "اقل من 3 سنوات"
      ) {
        setUserMainIncome(50000);
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
        (allInfo.userJob === "خفير" || allInfo.userJob === "مزارع") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(4500);
      } else if (
        allInfo.userJob === "معاون امن" &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(5500);
      } else if (
        (allInfo.userJob === "معاش حكومي" ||
          allInfo.userJob === "معاش عن قطاع خاص" ||
          allInfo.userJob === "معاش مستحقين") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(6000);
      } else if (
        (allInfo.userJob === "فني ماكينات زراعية" ||
          allInfo.userJob === "مالك حوالات بنكية" ||
          allInfo.userJob === "مالك سيارة اجرة او نقل") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(7500);
      } else if (
        (allInfo.userJob === "مهندس ري" ||
          allInfo.userJob === "استورجي" ||
          allInfo.userJob === "ترزي" ||
          allInfo.userJob === "سائق" ||
          allInfo.userJob === "سروجي سيارات" ||
          allInfo.userJob === "سكرتير" ||
          allInfo.userJob === "سمسار" ||
          allInfo.userJob === "صحفي" ||
          allInfo.userJob === "عامل بناء" ||
          allInfo.userJob === "عامل خدمات" ||
          allInfo.userJob === "عامل خدمات فندقية" ||
          allInfo.userJob === "عريف" ||
          allInfo.userJob === "عفشجي" ||
          allInfo.userJob === "فني الوميتال" ||
          allInfo.userJob === "فني دش" ||
          allInfo.userJob === "فني سيراميك" ||
          allInfo.userJob === "فني صيانة اجهزة منزلية" ||
          allInfo.userJob === "فني كاميرات" ||
          allInfo.userJob === "فني كمبيوتر" ||
          allInfo.userJob === "فني محارة وجبس" ||
          allInfo.userJob === "كهربائي سيارات" ||
          allInfo.userJob === "مسئول امن" ||
          allInfo.userJob === "مسئول انتاج" ||
          allInfo.userJob === "مسئول جوده" ||
          allInfo.userJob === "منظم رحلات" ||
          allInfo.userJob === "صاحب شركة صغيره" ||
          allInfo.userJob === "ميكانيكي") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(8500);
      } else if (
        (allInfo.userJob === "حداد" || allInfo.userJob === "نقاش") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(9500);
      } else if (
        (allInfo.userJob === "مالك شهادات بنكية" ||
          allInfo.userJob === "مهندس زراعي" ||
          allInfo.userJob === "اخصائي اجتماعي" ||
          allInfo.userJob === "رقيب" ||
          allInfo.userJob === "سباك" ||
          allInfo.userJob === "عامل مصعد" ||
          allInfo.userJob === "فني تكييف" ||
          allInfo.userJob === "فني صيانة" ||
          allInfo.userJob === "كهربائي" ||
          allInfo.userJob === "لايف جارد" ||
          allInfo.userJob === "مامور جمرك" ||
          allInfo.userJob === "مترجم" ||
          allInfo.userJob === "مدرس ابتدائي" ||
          allInfo.userJob === "مدرس اعدادي" ||
          allInfo.userJob === "مدرس مواد فنية وانشطة " ||
          allInfo.userJob === "مرشد سياحي" ||
          allInfo.userJob === "مساعد شرطة" ||
          allInfo.userJob === "مساعد شيف" ||
          allInfo.userJob === "مسؤول خدمة عملاء" ||
          allInfo.userJob === "مسئول حجز" ||
          allInfo.userJob === "مضيف ارضي" ||
          allInfo.userJob === "نجار") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(10000);
      } else if (
        allInfo.userJob === "مالك عقارات ومحلات" &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(10500);
      } else if (
        (allInfo.userJob === "اعلامي" ||
          allInfo.userJob === "مدخل بيانات" ||
          allInfo.userJob === "مسئول تحصيل" ||
          allInfo.userJob === "مسئول جمارك" ||
          allInfo.userJob === "مشرف اداري" ||
          allInfo.userJob === "موظف استقبال" ||
          allInfo.userJob === "امين شرطة" ||
          allInfo.userJob === "رقيب اول") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(11500);
      } else if (
        allInfo.userJob === "مدرس ثانوي" &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(12000);
      } else if (
        (allInfo.userJob === "فني اشعة" ||
          allInfo.userJob === "فني تحاليل" ||
          allInfo.userJob === "فني تخدير" ||
          allInfo.userJob === "فني تعقيم" ||
          allInfo.userJob === "محلل بيانات" ||
          allInfo.userJob === "مساعد" ||
          allInfo.userJob === "مسئول" ||
          allInfo.userJob === "مسئول اداري" ||
          allInfo.userJob === "مسئول مبيعات" ||
          allInfo.userJob === "موظف امن") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(12500);
      } else if (
        (allInfo.userJob === "بلوجر" ||
          allInfo.userJob === "يوتيوبر" ||
          allInfo.userJob === "مساعد مدرس") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(13000);
      } else if (
        allInfo.userJob === "محامى جزئي" &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(13500);
      } else if (
        (allInfo.userJob === "محامي ابتدائي" ||
          allInfo.userJob === "محامي استئناف" ||
          allInfo.userJob === "محامي نقض" ||
          allInfo.userJob === "معاش شرطة" ||
          allInfo.userJob === "مهندس تكنولوجيا" ||
          allInfo.userJob === "موجه تعليمي") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(14000);
      } else if (
        (allInfo.userJob === "صاحب مزرعة مواشي" ||
          allInfo.userJob === "فني شبكات" ||
          allInfo.userJob === "لاعب كرة " ||
          allInfo.userJob === "مساعد اول" ||
          allInfo.userJob === "صاحب شركة متوسطة" ||
          allInfo.userJob === "مصمم برامج") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(15000);
      } else if (
        (allInfo.userJob === "مراجع" ||
          allInfo.userJob === "مشرف" ||
          allInfo.userJob === "ممرض") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(16000);
      } else if (
        (allInfo.userJob === "ملازم" ||
          allInfo.userJob === "ملازم بحري" ||
          allInfo.userJob === "ملازم طيار") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(17000);
      } else if (
        (allInfo.userJob === "رئيس الصيانه" ||
          allInfo.userJob === "مأمور ضرائب" ||
          allInfo.userJob === "محاسب قانوني" ||
          allInfo.userJob === "مدير الحجز" ||
          allInfo.userJob === "مضيف جوي" ||
          allInfo.userJob === "معاش قوات مسلحة" ||
          allInfo.userJob === "معاون نيابة") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(17500);
      } else if (
        (allInfo.userJob === "مدير خدمات الضيوف" ||
          allInfo.userJob === "معيد (ماجيستير" ||
          allInfo.userJob === "مهندس  صيانة" ||
          allInfo.userJob === "ملازم اول" ||
          allInfo.userJob === "ملازم اول بحري" ||
          allInfo.userJob === "ملازم اول طيار") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(18500);
      } else if (
        (allInfo.userJob === "سكرتيرة" ||
          allInfo.userJob === "سياسي" ||
          allInfo.userJob === "محاسب" ||
          allInfo.userJob === "مدير امن" ||
          allInfo.userJob === "صاحب شركة كبيره" ||
          allInfo.userJob === "مهندس صيانة") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(20000);
      } else if (
        (allInfo.userJob === "نقيب" ||
          allInfo.userJob === "نقيب بحري" ||
          allInfo.userJob === "نقيب طيار") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(20500);
      } else if (
        (allInfo.userJob === "طبيب" || allInfo.userJob === "مدير الانظمة") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(21000);
      } else if (
        allInfo.userJob === "وكيل نيابة" &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(21500);
      } else if (
        allInfo.userJob === "مبرمج" &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(22000);
      } else if (
        (allInfo.userJob === "استاذ جامعى" ||
          allInfo.userJob === "استاذ جامعي (دكتوراه)" ||
          allInfo.userJob === "صيدلى" ||
          allInfo.userJob === "مهندس" ||
          allInfo.userJob === "رائد" ||
          allInfo.userJob === "رائد بحري" ||
          allInfo.userJob === "رائد طيار") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(22500);
      } else if (
        (allInfo.userJob === "مقدم" ||
          allInfo.userJob === "مقدم بحري" ||
          allInfo.userJob === "مقدم طيار") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(24000);
      } else if (
        (allInfo.userJob === "شيف تنفيذي" ||
          allInfo.userJob === "مدير اغذية و مشروبات" ||
          allInfo.userJob === "مدير العمليات" ||
          allInfo.userJob === "مدير الموارد البشرية" ||
          allInfo.userJob === "مدير تسويق" ||
          allInfo.userJob === "مدير مبيعات" ||
          allInfo.userJob === "مدير مشتريات" ||
          allInfo.userJob === "رئيس نيابة" ||
          allInfo.userJob === "محامي شئون قانونية " ||
          allInfo.userJob === "مدير اشعة" ||
          allInfo.userJob === "مدير تحاليل" ||
          allInfo.userJob === "مدير عمليات") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(25000);
      } else if (
        (allInfo.userJob === "عقيد" ||
          allInfo.userJob === "عقيد بحري" ||
          allInfo.userJob === "عقيد طيار") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(26000);
      } else if (
        (allInfo.userJob === "مدير وكالة سفر" ||
          allInfo.userJob === "صيدلي" ||
          allInfo.userJob === "طبيب اخصائي" ||
          allInfo.userJob === "طبيب استشاري" ||
          allInfo.userJob === "طبيب تخدير" ||
          allInfo.userJob === "طبيب ممارس") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(27500);
      } else if (
        (allInfo.userJob === "عميد" ||
          allInfo.userJob === "عميد بحري" ||
          allInfo.userJob === "عميد طيار") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(28500);
      } else if (
        allInfo.userJob === "ممثل" &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(30000);
      } else if (
        allInfo.userJob === "رئيس قسم" &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(30500);
      } else if (
        (allInfo.userJob === "لواء" ||
          allInfo.userJob === "لواء بحري" ||
          allInfo.userJob === "لواء طيار") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(31000);
      } else if (
        allInfo.userJob === "مدير" &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(34000);
      } else if (
        (allInfo.userJob === "مدير مالي" ||
          allInfo.userJob === "نائب مدير الفندق") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(35000);
      } else if (
        allInfo.userJob === "رئيس قطاع" &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(37500);
      } else if (
        (allInfo.userJob === "قاضي" || allInfo.userJob === "مستشار") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(40000);
      } else if (
        (allInfo.userJob === "مهندس بترول" || allInfo.userJob === "مدير بنك") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(45000);
      } else if (
        (allInfo.userJob === "طيار" || allInfo.userJob === "رئيس محكمة") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(50000);
      } else if (
        allInfo.userJob === "مدير فندق" &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(55000);
      } else if (
        (allInfo.userJob === "فريق" ||
          allInfo.userJob === "فريق اول" ||
          allInfo.userJob === "فريق اول بحري" ||
          allInfo.userJob === "فريق اول طيار" ||
          allInfo.userJob === "فريق بحري" ||
          allInfo.userJob === "فريق طيار" ||
          allInfo.userJob === "مالك" ||
          allInfo.userJob === "مشير") &&
        allInfo.userExperience === "من 3 سنوات الي 5 سنوات"
      ) {
        setUserMainIncome(75000);
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
        (allInfo.userJob === "خفير" || allInfo.userJob === "مزارع") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(6000);
      } else if (
        allInfo.userJob === "معاون امن" &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(7000);
      } else if (
        (allInfo.userJob === "معاش حكومي" ||
          allInfo.userJob === "معاش عن قطاع خاص" ||
          allInfo.userJob === "معاش مستحقين") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(8000);
      } else if (
        (allInfo.userJob === "فني ماكينات زراعية" ||
          allInfo.userJob === "مالك حوالات بنكية" ||
          allInfo.userJob === "مالك سيارة اجرة او نقل" ||
          allInfo.userJob === "استورجي" ||
          allInfo.userJob === "ترزي" ||
          allInfo.userJob === "سائق" ||
          allInfo.userJob === "سروجي سيارات" ||
          allInfo.userJob === "سكرتير" ||
          allInfo.userJob === "سمسار" ||
          allInfo.userJob === "صحفي" ||
          allInfo.userJob === "عامل بناء" ||
          allInfo.userJob === "عامل خدمات" ||
          allInfo.userJob === "عامل خدمات فندقية" ||
          allInfo.userJob === "عريف" ||
          allInfo.userJob === "عفشجي" ||
          allInfo.userJob === "فني الوميتال" ||
          allInfo.userJob === "فني دش" ||
          allInfo.userJob === "فني سيراميك" ||
          allInfo.userJob === "فني صيانة اجهزة منزلية" ||
          allInfo.userJob === "فني كاميرات" ||
          allInfo.userJob === "فني كمبيوتر" ||
          allInfo.userJob === "فني محارة وجبس" ||
          allInfo.userJob === "كهربائي سيارات" ||
          allInfo.userJob === "مسئول امن" ||
          allInfo.userJob === "مسئول انتاج" ||
          allInfo.userJob === "مسئول جوده" ||
          allInfo.userJob === "منظم رحلات" ||
          allInfo.userJob === "صاحب شركة صغيره" ||
          allInfo.userJob === "ميكانيكي") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(10000);
      } else if (
        (allInfo.userJob === "مهندس ري" ||
          allInfo.userJob === "حداد" ||
          allInfo.userJob === "نقاش" ||
          allInfo.userJob === "اخصائي اجتماعي" ||
          allInfo.userJob === "رقيب" ||
          allInfo.userJob === "سباك" ||
          allInfo.userJob === "عامل مصعد" ||
          allInfo.userJob === "فني تكييف" ||
          allInfo.userJob === "فني صيانة" ||
          allInfo.userJob === "كهربائي" ||
          allInfo.userJob === "لايف جارد" ||
          allInfo.userJob === "مامور جمرك" ||
          allInfo.userJob === "مترجم" ||
          allInfo.userJob === "مدرس ابتدائي" ||
          allInfo.userJob === "مدرس اعدادي" ||
          allInfo.userJob === "مدرس مواد فنية وانشطة " ||
          allInfo.userJob === "مرشد سياحي" ||
          allInfo.userJob === "مساعد شرطة" ||
          allInfo.userJob === "مساعد شيف" ||
          allInfo.userJob === "مسؤول خدمة عملاء" ||
          allInfo.userJob === "مسئول حجز" ||
          allInfo.userJob === "مضيف ارضي" ||
          allInfo.userJob === "نجار") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(12000);
      } else if (
        (allInfo.userJob === "امين شرطة" || allInfo.userJob === "رقيب اول") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(14000);
      } else if (
        (allInfo.userJob === "مالك شهادات بنكية" ||
          allInfo.userJob === "مهندس زراعي" ||
          allInfo.userJob === "مالك عقارات ومحلات" ||
          allInfo.userJob === "اعلامي" ||
          allInfo.userJob === "مدخل بيانات" ||
          allInfo.userJob === "مسئول تحصيل" ||
          allInfo.userJob === "مسئول جمارك" ||
          allInfo.userJob === "مشرف اداري" ||
          allInfo.userJob === "موظف استقبال" ||
          allInfo.userJob === "مدرس ثانوي" ||
          allInfo.userJob === "فني اشعة" ||
          allInfo.userJob === "فني تحاليل" ||
          allInfo.userJob === "فني تخدير" ||
          allInfo.userJob === "فني تعقيم" ||
          allInfo.userJob === "محلل بيانات" ||
          allInfo.userJob === "مساعد" ||
          allInfo.userJob === "مسئول" ||
          allInfo.userJob === "مسئول اداري" ||
          allInfo.userJob === "مسئول مبيعات" ||
          allInfo.userJob === "موظف امن") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(15000);
      } else if (
        allInfo.userJob === "مساعد مدرس" &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(16000);
      } else if (
        (allInfo.userJob === "موجه تعليمي" ||
          allInfo.userJob === "مساعد اول" ||
          allInfo.userJob === "مصمم برامج") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(18000);
      } else if (
        (allInfo.userJob === "بلوجر" ||
          allInfo.userJob === "يوتيوبر" ||
          allInfo.userJob === "محامى جزئي" ||
          allInfo.userJob === "محامي ابتدائي" ||
          allInfo.userJob === "محامي استئناف" ||
          allInfo.userJob === "محامي نقض" ||
          allInfo.userJob === "معاش شرطة" ||
          allInfo.userJob === "مهندس تكنولوجيا" ||
          allInfo.userJob === "صاحب مزرعة مواشي" ||
          allInfo.userJob === "فني شبكات" ||
          allInfo.userJob === "لاعب كرة " ||
          allInfo.userJob === "مراجع" ||
          allInfo.userJob === "مشرف" ||
          allInfo.userJob === "ممرض" ||
          allInfo.userJob === "ملازم" ||
          allInfo.userJob === "ملازم بحري" ||
          allInfo.userJob === "ملازم طيار" ||
          allInfo.userJob === "صاحب شركة متوسطة" ||
          allInfo.userJob === "معاون نيابة") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(20000);
      } else if (
        (allInfo.userJob === "ملازم اول" ||
          allInfo.userJob === "ملازم اول بحري" ||
          allInfo.userJob === "ملازم اول طيار") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(22000);
      } else if (
        (allInfo.userJob === "نقيب" ||
          allInfo.userJob === "نقيب بحري" ||
          allInfo.userJob === "نقيب طيار") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(24000);
      } else if (
        (allInfo.userJob === "رئيس الصيانه" ||
          allInfo.userJob === "مأمور ضرائب" ||
          allInfo.userJob === "محاسب قانوني" ||
          allInfo.userJob === "مدير الحجز" ||
          allInfo.userJob === "مضيف جوي" ||
          allInfo.userJob === "معاش قوات مسلحة" ||
          allInfo.userJob === "مدير خدمات الضيوف" ||
          allInfo.userJob === "معيد (ماجيستير" ||
          allInfo.userJob === "مهندس  صيانة" ||
          allInfo.userJob === "سكرتيرة" ||
          allInfo.userJob === "سياسي" ||
          allInfo.userJob === "محاسب" ||
          allInfo.userJob === "مدير امن" ||
          allInfo.userJob === "مهندس صيانة" ||
          allInfo.userJob === "صاحب شركة كبيره" ||
          allInfo.userJob === "وكيل نيابة") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(25000);
      } else if (
        (allInfo.userJob === "رائد" ||
          allInfo.userJob === "رائد بحري" ||
          allInfo.userJob === "رائد طيار") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(27000);
      } else if (
        (allInfo.userJob === "مقدم" ||
          allInfo.userJob === "مقدم بحري" ||
          allInfo.userJob === "مقدم طيار") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(28000);
      } else if (
        (allInfo.userJob === "طبيب" ||
          allInfo.userJob === "مدير الانظمة" ||
          allInfo.userJob === "مبرمج" ||
          allInfo.userJob === "استاذ جامعى" ||
          allInfo.userJob === "استاذ جامعي (دكتوراه)" ||
          allInfo.userJob === "صيدلى" ||
          allInfo.userJob === "مهندس" ||
          allInfo.userJob === "رئيس نيابة" ||
          allInfo.userJob === "محامي شئون قانونية " ||
          allInfo.userJob === "مدير اشعة" ||
          allInfo.userJob === "مدير تحاليل" ||
          allInfo.userJob === "مدير عمليات" ||
          allInfo.userJob === "عقيد" ||
          allInfo.userJob === "عقيد بحري" ||
          allInfo.userJob === "عقيد طيار") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(30000);
      } else if (
        (allInfo.userJob === "عميد" ||
          allInfo.userJob === "عميد بحري" ||
          allInfo.userJob === "عميد طيار") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(32000);
      } else if (
        (allInfo.userJob === "شيف تنفيذي" ||
          allInfo.userJob === "مدير اغذية و مشروبات" ||
          allInfo.userJob === "مدير العمليات" ||
          allInfo.userJob === "مدير الموارد البشرية" ||
          allInfo.userJob === "مدير تسويق" ||
          allInfo.userJob === "مدير مبيعات" ||
          allInfo.userJob === "مدير مشتريات" ||
          allInfo.userJob === "صيدلي" ||
          allInfo.userJob === "طبيب اخصائي" ||
          allInfo.userJob === "طبيب استشاري" ||
          allInfo.userJob === "طبيب تخدير" ||
          allInfo.userJob === "طبيب ممارس" ||
          allInfo.userJob === "ممثل" ||
          allInfo.userJob === "لواء" ||
          allInfo.userJob === "لواء بحري" ||
          allInfo.userJob === "لواء طيار") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(35000);
      } else if (
        (allInfo.userJob === "مدير وكالة سفر" ||
          allInfo.userJob === "رئيس قسم") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(40000);
      } else if (
        allInfo.userJob === "مدير" &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(45000);
      } else if (
        (allInfo.userJob === "مدير مالي" ||
          allInfo.userJob === "نائب مدير الفندق" ||
          allInfo.userJob === "رئيس قطاع" ||
          allInfo.userJob === "قاضي" ||
          allInfo.userJob === "مستشار") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(50000);
      } else if (
        (allInfo.userJob === "مدير بنك" || allInfo.userJob === "رئيس محكمة") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(60000);
      } else if (
        (allInfo.userJob === "مهندس بترول" || allInfo.userJob === "طيار") &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(70000);
      } else if (
        allInfo.userJob === "مدير فندق" &&
        allInfo.userExperience === "اكثر من 5 سنوات"
      ) {
        setUserMainIncome(80000);
      } else if (
        (allInfo.userJob === "فريق" ||
          allInfo.userJob === "فريق اول" ||
          allInfo.userJob === "فريق اول بحري" ||
          allInfo.userJob === "فريق اول طيار" ||
          allInfo.userJob === "فريق بحري" ||
          allInfo.userJob === "فريق طيار" ||
          allInfo.userJob === "مالك" ||
          allInfo.userJob === "مشير") &&
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
                    نوع العمل <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="jobKind"
                    name="userJobKind"
                    className="w-80 p-1 border rounded"
                    onChange={changeHandler}
                    defaultValue={""}
                    required
                  >
                    <option disabled></option>
                    {jobsKind.map((kind) => (
                      <option key={kind}>{kind}</option>
                    ))}
                  </select>
                </div>
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
                    {allInfo.userJobKind === "العسكريين"
                      ? kinds["العسكريين"].map((kind) => (
                          <option key={kind}>{kind}</option>
                        ))
                      : allInfo.userJobKind === "حكومي"
                      ? kinds["حكومي"].map((kind) => (
                          <option key={kind}>{kind}</option>
                        ))
                      : allInfo.userJobKind === "خاص"
                      ? kinds["خاص"].map((kind) => (
                          <option key={kind}>{kind}</option>
                        ))
                      : allInfo.userJobKind === "حكومي / خاص"
                      ? kinds["حكومي / خاص"].map((kind) => (
                          <option key={kind}>{kind}</option>
                        ))
                      : allInfo.userJobKind === "المهن الحرة"
                      ? kinds["المهن الحرة"].map((kind) => (
                          <option key={kind}>{kind}</option>
                        ))
                      : allInfo.userJobKind === "اخري"
                      ? kinds["اخري"].map((kind) => (
                          <option key={kind}>{kind}</option>
                        ))
                      : null}
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
                    {allInfo.userJobSector === "القطاع البحري"
                      ? sector["القطاع البحري"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "القطاع الجوي"
                      ? sector["القطاع الجوي"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "قطاع الشرطة"
                      ? sector["قطاع الشرطة"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "قطاع القوات المسلحة"
                      ? sector["قطاع القوات المسلحة"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "الطلبة"
                      ? sector["الطلبة"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "القطاع التعليمي"
                      ? sector["القطاع التعليمي"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "القطاع الرياضي"
                      ? sector["القطاع الرياضي"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "القطاع الزراعي"
                      ? sector["القطاع الزراعي"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "القطاع الصناعي"
                      ? sector["القطاع الصناعي"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "القطاع الطبي"
                      ? sector["القطاع الطبي"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "القطاع المالي والمصرفي"
                      ? sector["القطاع المالي والمصرفي"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "قطاع البترول"
                      ? sector["قطاع البترول"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "قطاع السياحة"
                      ? sector["قطاع السياحة"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "القطاع القضائي"
                      ? sector["القطاع القضائي"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "المعاشات"
                      ? sector["المعاشات"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "قطاع الطاقة"
                      ? sector["قطاع الطاقة"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "قطاع الطيران المدني"
                      ? sector["قطاع الطيران المدني"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "قطاع النقل"
                      ? sector["قطاع النقل"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "القطاع التجاري"
                      ? sector["القطاع التجاري"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "القطاع التكنولوجي"
                      ? sector["القطاع التكنولوجي"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "المعاشات الخاصة"
                      ? sector["المعاشات الخاصة"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "الحرفيين"
                      ? sector["الحرفيين"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "المشاهير"
                      ? sector["المشاهير"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "المهن المستقلة"
                      ? sector["المهن المستقلة"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "مصادر دخل اخري"
                      ? sector["مصادر دخل اخري"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : allInfo.userJobSector === "وظائف الرفض"
                      ? sector["وظائف الرفض"].map((job) => (
                          <option key={job}>{job}</option>
                        ))
                      : null}
                  </select>
                </div>
              </div>
              <div className="flex justify-between my-2.5">
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
              </div>
              <div className="flex justify-evenly my-2.5">
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
