package services;


public class EstateService {
    private EstateDao estateDao = new EstateDao();

    public EstateEntity createEstate(EstateInfos infos) {
      /*  if (infos == null || !infos.isValid()) {
            throw new Exception("mauvais ");
        }*/

        EstateEntity estate = estateDao.save(infos);

        return estate;
    }

    public void deleteEstate(String estateId) {

        EstateEntity estate = estateDao.findById(estateId);
       /* if (estate == null) {
            throw new Exception(" pas de logement trouvé avec cet ID " + estateId);
        }*/

        estateDao.delete(estateId);
    }

    public EstateEntity findEstate(String estateId) {

        EstateEntity estate = estateDao.findById(estateId);
        return estate;
    }

    public List <EstateEntity> AllEstate() {

        //
    }

}
