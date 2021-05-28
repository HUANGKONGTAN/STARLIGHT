import SundryRender from '@/components/sundry/SundryRender';

export default function SundryPage(props:any) {
  return ( 
    <div>
      <SundryRender id={props.match.params.id} type={"show"}></SundryRender>
    </div>
  );
  
}

SundryPage.wrappers = ['@/wrappers/auth']
