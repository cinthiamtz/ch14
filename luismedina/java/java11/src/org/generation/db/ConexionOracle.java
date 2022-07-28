package org.generation.db;

public class ConexionOracle implements GenericDb{
	private String cadenaConexion;
	private int puerto;
	private String permiso;

	/**
	 * @param cadenaConexion
	 * @param puerto 
	 * @param permiso 
	 */
	public ConexionOracle(String cadenaConexion, int puerto, String permiso) {
		this.puerto=puerto;
		this.cadenaConexion = cadenaConexion;
		this.setPermiso(permiso);
	}

	public String getCadenaConexion() {
		return cadenaConexion;
	}

	public void setCadenaConexion(String cadenaConexion) {
		this.cadenaConexion = cadenaConexion;
	}

	public int getPuerto() {
		return puerto;
	}

	public void setPuerto(int puerto) {
		this.puerto = puerto;
	}

	@Override
	public String insertar(int dato) {
		// TODO Auto-generated method stub
		return "Se inserta dato en DB Oracle el dato: " + dato;
	}

	@Override
	public String enlistar() {
		// TODO Auto-generated method stub
		return "Se elista dato en DB Oracle";
	}

	@Override
	public String actualizar() {
		// TODO Auto-generated method stub
		return "Se actualiza dato en DB Oracle";
	}

	@Override
	public String eliminar() {
		// TODO Auto-generated method stub
		return "Se elimina dato en DB Oracle";
	}

	/**
	 * @return the permiso
	 */
	public String getPermiso() {
		return permiso;
	}

	/**
	 * @param permiso the permiso to set
	 */
	public void setPermiso(String permiso) {
		this.permiso = permiso;
	}

}
