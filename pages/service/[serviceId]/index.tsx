import React from "react";
import ServicePage from "@/components/reusable/ServicePage";
import { useRouter } from "next/router";

type Props = {};

const ServiceDetail = (props: Props) => {
  const router = useRouter();
  const serviceId = router.query.serviceId;

  console.log("ServiceId", serviceId);

  return (
    <>
      <ServicePage serviceId={serviceId} />
    </>
  );
};

export default ServiceDetail;
